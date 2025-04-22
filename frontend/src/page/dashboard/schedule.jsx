import React, { useState, useEffect } from "react";
import { Calendar, Modal, Button, Checkbox, message } from "antd";
import moment from "moment";
import axios from "axios";
import Dashboard from "./dashboard";

const Schedule = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]); // Dynamically managed
  const [bookedSlots, setBookedSlots] = useState([]); // Initially empty
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const slots = [];
    for (let hour = 9; hour <= 15; hour++) {
      const startTime = moment().set({ hour, minute: 0 });
      const endTime = moment().set({ hour, minute: 59 });
      slots.push(
        `${startTime.format("hh:mm A")} - ${endTime.format("hh:mm A")}`
      );
    }
    setAvailableSlots(slots);
  }, []);

  const handleSelectDate = (date) => {
    const selectedDate = moment(date).format("YYYY-MM-DD");
    if (moment(selectedDate).isBefore(moment().format("YYYY-MM-DD"))) return;
    if (selectedDates.includes(selectedDate)) {
      setSelectedDates(selectedDates.filter((d) => d !== selectedDate));
    } else {
      setSelectedDates([...selectedDates, selectedDate]);
    }
    setShowModal(true);
  };

  const handleMarkUnavailable = () => {
    setUnavailableDates((prev) => [...new Set([...prev, ...selectedDates])]);
    setShowModal(false);
    setSelectedDates([]);
  };

  const handleSlotSelection = (value) => {
    setSelectedSlots(value);
  };

  const handleScheduleSave = async () => {
    if (selectedDates.length === 0 || selectedSlots.length === 0) {
      message.warning("Please select date and time slot");
      return;
    }

    const weeklyAvailability = {};
    selectedDates.forEach((date) => {
      const day = moment(date).format("dddd").toLowerCase();
      if (!weeklyAvailability[day]) weeklyAvailability[day] = [];
      selectedSlots.forEach((slot) => {
        const [start, end] = slot.split(" - ");
        weeklyAvailability[day].push({
          startTime: moment(start, "hh:mm A").format("HH:mm"),
          endTime: moment(end, "hh:mm A").format("HH:mm"),
        });
      });
    });

    const payload = {
      weeklyAvailability,
      unavailableDates,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/v1/availability",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success("Availability saved successfully!");
      setBookedSlots((prev) => [
        ...prev,
        ...selectedDates.flatMap((date) =>
          selectedSlots.map((slot) => ({ date, slot }))
        ),
      ]);
      setSelectedDates([]);
      setSelectedSlots([]);
      setShowModal(false);
    } catch (err) {
      message.error("Failed to save availability");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const dateCellRender = (value) => {
    const currentDate = moment(value).format("YYYY-MM-DD");
    if (unavailableDates.includes(currentDate)) {
      return <div className="bg-red-500 text-white p-2">Unavailable</div>;
    }
    const bookedOnThisDay = bookedSlots.filter(
      (slot) => slot.date === currentDate
    );
    if (bookedOnThisDay.length) {
      return (
        <div>
          {bookedOnThisDay.map((slot, index) => (
            <div key={index} className="bg-green-200 p-1 rounded">
              {slot.slot}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Dashboard>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Schedule Time Slots</h2>
        <Calendar
          fullscreen={false}
          dateCellRender={dateCellRender}
          onSelect={handleSelectDate}
        />
        <Modal
          title="Select Available Time Slots"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={[
            <Button key="cancel" onClick={() => setShowModal(false)}>
              Cancel
            </Button>,
            <Button
              key="save"
              type="primary"
              onClick={handleScheduleSave}
              loading={loading}
            >
              Save Slots
            </Button>,
            <Button key="unavailable" danger onClick={handleMarkUnavailable}>
              Mark Unavailable
            </Button>,
          ]}
        >
          <Checkbox.Group
            options={availableSlots}
            onChange={handleSlotSelection}
            value={selectedSlots}
          />
        </Modal>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Next 7 Days Information</h3>
          <ul>
            {Array.from({ length: 7 }, (_, index) => {
              const date = moment().add(index, "days").format("YYYY-MM-DD");
              const bookedOnDate = bookedSlots.filter(
                (slot) => slot.date === date
              );
              return (
                <li key={date} className="flex justify-between p-2">
                  <span>{date}</span>
                  <span>
                    {bookedOnDate.length > 0
                      ? `${bookedOnDate.length} booked slots`
                      : "No bookings"}
                  </span>
                </li>
              );
            })}
          </ul>

          <h3 className="mt-4 text-xl font-semibold">Unavailable Dates</h3>
          <ul>
            {unavailableDates.length > 0 ? (
              unavailableDates.map((date) => (
                <li key={date} className="p-2">
                  {date}
                </li>
              ))
            ) : (
              <li className="p-2">No unavailable dates marked</li>
            )}
          </ul>
        </div>
      </div>
    </Dashboard>
  );
};

export default Schedule;
