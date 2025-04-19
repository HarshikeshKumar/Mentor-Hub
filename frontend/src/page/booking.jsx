import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { FaClock } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import service from "../apiManger/service";
import availability from "../apiManger/availability";
import moment from "moment";
import booking from "../apiManger/booking";
import handlePayment from "../components/Checkout";
import Layout from "../components/Layout";

const Booking = () => {
  const navigate = useNavigate();
  const { username, id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [mentorAvailability, setMentorAvailability] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loadingService, setLoadingService] = useState(false);
  const [loadingAvailability, setLoadingAvailability] = useState(false);

  const getServiceData = async () => {
    setLoadingService(true);
    const res = await service.getServiceById(id);
    setServiceData(res?.data?.service);
    getMentorAvailability(
      res?.data?.service?.mentor,
      res?.data?.service?.duration
    );
    setLoadingService(false);
  };

  const getMentorAvailability = async (id, duration) => {
    setLoadingAvailability(true);
    const res = await availability.getMentorAvailability(id, duration);
    setMentorAvailability(res?.data?.availability);
    setLoadingAvailability(false);
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  const onBookServiceClick = async () => {
    const res = await booking.bookService({
      serviceId: id,
      dateAndTime: selectedSlot,
    });
    handlePayment(res.data.order.id, (response) => {
      navigate("/success");
    });
  };

  return (
    <Layout>
      <div className="container flex flex-col p-4 mx-auto md:flex-row md:space-x-4">
        <div className=" md:w-1/3">
          <Card className="text-white bg-blue-600">
            <div className="flex items-center mb-4">
              <AiOutlineArrowLeft className="mr-2 text-xl" />
              <h2 className="text-2xl font-bold">{serviceData?.name}</h2>
            </div>
            <div className="flex items-center mb-2">
              <MdOutlineCurrencyRupee className="mr-2 text-xl " />
              <span>{serviceData?.price}</span>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="mr-2" />
              <span>{serviceData?.duration} mins meeting</span>
            </div>
            <p>{serviceData?.description}</p>
          </Card>
        </div>
        <div className="md:w-2/3">
          <Card className="p-4">
            <h3 className="mb-2 text-lg font-semibold">Select Date</h3>
            {loadingAvailability ? (
              <div className="flex items-center justify-center h-full">
                <Spin size="large" />
              </div>
            ) : (
              <div className="flex gap-2 my-6">
                {mentorAvailability?.map((item, index) => (
                  <div
                    onClick={() => {
                      setActiveIndex(index);
                      setSelectedSlot(null);
                    }}
                    key={item.id}
                    className={`p-2 rounded-md cursor-pointer ${
                      activeIndex === index ? "bg-blue-600" : ""
                    }`}
                  >
                    {moment(item.date).format("DD MMM")}
                  </div>
                ))}
              </div>
            )}

            {activeIndex !== null && (
              <>
                <h3 className="mb-2 text-lg font-semibold">Select Time Slot</h3>
                <div className="flex gap-2 my-6 overflow-x-auto">
                  {mentorAvailability[activeIndex]?.slots?.map((slot) => (
                    <div
                      onClick={() => setSelectedSlot(slot.fullStart)}
                      key={slot.id}
                      className={`p-2 rounded-md cursor-pointer ${
                        selectedSlot === slot.fullStart ? "bg-blue-600" : ""
                      }`}
                    >
                      {slot.startTime}
                    </div>
                  ))}
                </div>
              </>
            )}

            <Button
              disabled={selectedSlot === null}
              type="primary"
              block
              size="large"
              onClick={onBookServiceClick}
            >
              Book Session
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
