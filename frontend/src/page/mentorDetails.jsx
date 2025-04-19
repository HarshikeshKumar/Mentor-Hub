import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mentorAPI from "../apiManger/mentor";
import { Spin } from "antd";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import ServiceCardUserSide from "../components/ServiceCardUserSide";
import Layout from "../components/Layout";
import { BiErrorAlt } from "react-icons/bi";

const MentorDetails = () => {
  const { username } = useParams();
  const [mentor, setMentor] = useState();
  const [services, setServices] = useState();
  const [mentorLoading, setMentorLoading] = useState(true); // Separate loading state for mentor
  const [servicesLoading, setServicesLoading] = useState(true); // Separate loading state for services

  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        setMentorLoading(true);
        const response = await mentorAPI.getMentorByUsername(username);
        setMentor(response?.data?.mentor);
        setMentorLoading(false); // Stop loading after mentor data is fetched
        setServices(response?.data?.services);
        setServicesLoading(false); // Stop loading after services data is fetched
      } catch (error) {
        console.error("Error fetching mentor details:", error);
        setMentorLoading(false); // Stop loading even if an error occurs
        setServicesLoading(false);
      }
    };

    fetchMentorDetails();
  }, [username]);

  return (
    <Layout>
      <div className="h-screen mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Mentor's Profile */}
          <div className="col-span-1 p-6">
            {mentorLoading ? (
              <div className="flex items-center justify-center h-full">
                <Spin size="large" />
              </div>
            ) : mentor ? (
              <>
                <img
                  src={
                    mentor?.photoUrl ||
                    `https://ui-avatars.com/api?name=${mentor?.name}`
                  }
                  alt={`${mentor?.name}'s avatar`}
                  className="w-48 h-48 mx-auto border rounded-full"
                />
                <h2 className="mt-4 text-3xl font-bold text-center">
                  {mentor?.name}
                </h2>
                <p className="mt-2 text-center text-gray-600">
                  {mentor?.profile?.title}
                </p>
                <div className="flex justify-center mt-4">
                  {mentor?.profile?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mx-1 text-xs bg-gray-100 rounded-full"
                    >
                      {tag || "Tags"}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-center text-gray-500">
                  {mentor?.profile?.bio || "Mentor bio"}
                </p>
                <h3 className="mt-8 text-lg font-semibold text-center">
                  Connect with me
                </h3>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={
                      mentor?.profile?.social?.linkedin || "www.linkedin.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-3xl text-blue-600" />
                  </a>
                  <a
                    href={mentor?.profile?.social?.github || "www.github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-3xl text-gray-800" />
                  </a>
                  <a
                    href={mentor?.profile?.social?.twitter || "www.twitter.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle className="text-3xl text-blue-400" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.facebook || "www.facebook.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFacebook className="text-3xl text-blue-700" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.instagram || "www.instagram.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram className="text-3xl text-pink-500" />
                  </a>
                </div>
              </>
            ) : (
              <p>Mentor not found.</p>
            )}
          </div>

          {/* Mentor's Services */}
          <div className="col-span-2 p-6 h-screen bg-[#F5F5F5]">
            <h3 className="mb-4 text-2xl font-bold">Book a Session</h3>

            {servicesLoading ? (
              <div className="flex items-center justify-center h-full">
                <Spin size="large" />
              </div>
            ) : services && services.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <ServiceCardUserSide
                    username={mentor?.username}
                    service={service}
                    key={service?._id}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-700">
                <BiErrorAlt className="w-24 h-24 mb-4 text-blue-500" />
                <h3 className="mb-2 text-xl font-semibold">
                  Oops! No Services Available
                </h3>
                <p className="mb-6 text-lg text-gray-500">
                  It seems like there are no services available at the moment.
                  Please check back later!
                </p>
                <button
                  className="px-6 py-3 text-white transition-colors bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                  onClick={() => window.location.reload()}
                >
                  Refresh
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorDetails;
