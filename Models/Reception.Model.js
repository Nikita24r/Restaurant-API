const mongoose = require('mongoose')

const ReceptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String,required: true },
    phone: { type: String, required: true },
    requirement: { type: String, required: true },
    comments: { type: String, default: true }
}, {
    timestamps: true
});

const Reception = mongoose.model('Reception', ReceptionSchema);

module.exports=Reception;