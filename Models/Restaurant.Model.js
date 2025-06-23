const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    isOpen: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports=Restaurant;