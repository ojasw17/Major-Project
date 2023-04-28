const mongoose = require("mongoose");

const diagnosisSchema = new mongoose.Schema(
  {
    diagnosis: {
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

module.exports = mongoose.model("Diagnosis", diagnosisSchema);
