const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    medicine: {
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

module.exports = mongoose.model("Medicine", medicineSchema);
