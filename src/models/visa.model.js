const mongoose = require("mongoose");

const VisaSchema = new mongoose.Schema({
  fullName: { type: String /* , required: true */ },
  motherName: { type: String /* , required: true */ },
  email: { type: String /* , required: true */ },
  gender: { type: String /* , required: true */ },
  contact: { type: Number /* , required: true */ },
  address: { type: String /* , required: true */ },
  visaRequestDate: { type: Date /* , required: true */ },
  dateOfBirth: { type: Date /* , required: true */ },
  placeOfBirth: { type: String /* , required: true */ },
  umrahDuration: { type: String /* , required: true */ },
  visaType: { type: String /* , required: true */ },
  passportSizePhoto: { type: String /* , required: true */ },
  idCardFront: { type: String /* , required: true */ },
  idCardBack: { type: String /* , required: true */ },
  passport: { type: String /* , required: true */ },
});

const Visa = new mongoose.model("Visa", VisaSchema);

module.exports = Visa;
