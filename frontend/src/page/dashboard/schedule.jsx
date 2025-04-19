import React, { useState, useEffect } from "react";
import { Calendar, Modal, Button, Checkbox } from "antd"; // Add your preferred modal and calendar
import moment from "moment";
import Dashboard from "./dashboard";

const Schedule = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]); // Dynamically managed
  const [bookedSlots, setBookedSlots] = useState([]); // Initially empty
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Initialize available slots with a specific range (9 AM to 3 PM)
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

    // Prevent selecting past dates
    if (moment(selectedDate).isBefore(moment().format("YYYY-MM-DD"))) {
      return; // Don't allow selection of past dates
    }

    // Toggle the selected date
    if (selectedDates.includes(selectedDate)) {
      setSelectedDates(selectedDates.filter((d) => d !== selectedDate));
    } else {
      setSelectedDates([...selectedDates, selectedDate]);
    }

    // Open modal for selecting time slots
    setShowModal(true);
  };

  const handleMarkUnavailable = () => {
    // Mark only the selected dates as unavailable
    setUnavailableDates((prev) => [...new Set([...prev, ...selectedDates])]);
    setShowModal(false);
    setSelectedDates([]);
  };

  const handleSlotSelection = (value) => {
    setSelectedSlots(value);
  };

  const handleScheduleSave = () => {
    // Save the scheduled time slots logic
    const newBookings = selectedDates.flatMap((date) =>
      selectedSlots.map((slot) => ({ date, slot }))
    );

    // Filter out existing booked slots to avoid duplicates
    const uniqueBookings = newBookings.filter(
      (newBooking) =>
        !bookedSlots.some(
          (existing) =>
            existing.date === newBooking.date &&
            existing.slot === newBooking.slot
        )
    );

    // Update booked slots with new unique bookings
    setBookedSlots((prev) => [...prev, ...uniqueBookings]);

    // Reset selections
    setShowModal(false);
    setSelectedSlots([]);
    setSelectedDates([]);
  };

  const dateCellRender = (value) => {
    const currentDate = moment(value).format("YYYY-MM-DD");

    // Highlight unavailable dates
    if (unavailableDates.includes(currentDate)) {
      return <div className="bg-red-500 text-white p-2">Unavailable</div>;
    }

    // Check if the current date has any booked slots
    const bookedOnThisDay = bookedSlots.filter(
      (slot) => slot.date === currentDate
    );

    // Show booked slots on this day
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
          visible={showModal}
          onCancel={() => setShowModal(false)}
          footer={[
            <Button key="cancel" onClick={() => setShowModal(false)}>
              Cancel
            </Button>,
            <Button key="save" type="primary" onClick={handleScheduleSave}>
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
