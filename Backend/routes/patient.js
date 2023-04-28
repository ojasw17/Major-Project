const router = require("express").Router();
const Diagnosis = require("../Models/Diagnosis");
const MedicalTest = require("../Models/MedicalTest");
const Medicine = require("../Models/Medicine");
const Patient = require("../Models/Patient");

router.post("/profile", async (req, res) => {
  try {
    const profile = new Patient({
      name: req.body.name,
      age: req.body.age,
      healthId: req.body.healthId,
    });

    console.log(profile);

    const patientProfile = await profile.save();
    res.status(200).json(patientProfile);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getProfile", async (req, res) => {
  const healthId = req.body.healthId;
  try {
    console.log(healthId);
    const profile = await Patient.find({ healthId: healthId });
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/medicalTest", async (req, res) => {
  try {
    const newMedicalTest = new MedicalTest({
      medicalTest: req.body.medicalTest,
      healthId: req.body.healthId,
    });

    console.log(newMedicalTest);

    const medicalTest = await newMedicalTest.save();
    res.status(200).json(medicalTest);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/medicine", async (req, res) => {
  try {
    const newMedicine = new Medicine({
      medicine: req.body.medicine,
      healthId: req.body.healthId,
    });

    const medicine = await newMedicine.save();
    res.status(200).json(medicine);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/diagnosis", async (req, res) => {
  console.log("Hit");
  try {
    const newDiagnosis = new Diagnosis({
      diagnosis: req.body.diagnosis,
      healthId: req.body.healthId,
    });

    const diagnosis = await newDiagnosis.save();
    res.status(200).json(diagnosis);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getMedicalTest", async (req, res) => {
  const healthId = req.body.healthId;
  try {
    console.log(healthId);
    const medicalTest = await MedicalTest.find({ healthId: healthId });
    res.status(200).json(medicalTest);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getMedicine", async (req, res) => {
  const healthId = req.body.healthId;
  try {
    const medicine = await Medicine.find({ healthId: healthId });
    res.status(200).json(medicine);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getDiagnosis", async (req, res) => {
  const healthId = req.body.healthId;
  try {
    const diagnosis = await Diagnosis.find({ healthId: healthId });
    res.status(200).json(diagnosis);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
