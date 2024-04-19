const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    reminderDate: { type: Date, required: true },
    coaches: [String]

}, { collection: "Form" });

const FormModel = mongoose.model("Form", FormSchema);
module.exports = FormModel;