const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: { type: String, required: true,},
    descriptions: { type: String, required: true },
    images: { type: String, required: true },  
    category: { type: String, required: true },
    price: { type: String, required: true }
}, {
    timestamps: true
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports=Menu;