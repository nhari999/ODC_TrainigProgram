const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    startDate: { type: Date, required: true },
    selectedEvent: { type: String, required: true },
    
   

}, { collection: "Session" });

const SessionFormModel = mongoose.model("Session", FormSchema);
module.exports = SessionFormModel;