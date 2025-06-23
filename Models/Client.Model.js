const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

const Client = mongoose.model('client', clientSchema);

module.exports=client;