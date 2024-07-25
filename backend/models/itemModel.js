// backend/models/itemModel.js
import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
}, {
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);
export default Item;


