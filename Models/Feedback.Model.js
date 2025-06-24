const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String,required: true },
    review: { type: String, required: true }
}, {
    timestamps: true
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports=Feedback;