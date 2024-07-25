// backend/models/orderModel.js
import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    items: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    status: { type: String, required: true, default: 'Pending' },
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
