const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      max: 100,
      unique: true,
    },
    age: {
      type: String,
      require: true,
      max: 100,
      unique: true,
    },
    healthId: {
      type: String,
      require: true,
      max: 100,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
