const { Schema, model } = require("mongoose");

const availabilitySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    weeklyAvailability: {
      monday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      tuesday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      wednesday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      thursday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      friday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      saturday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      sunday: [
        {
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
    },
    unavailableDates: [
      {
        type: Date,
      },
    ],
  },
  { timestamps: true }
);

const AvailabilityModel = model("Availability", availabilitySchema);
module.exports = AvailabilityModel;
