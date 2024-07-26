// backend/controllers/orderController.js
import asyncHandler from 'express-async-handler';
import Order from '../models/ordermodel.js';

// @desc    Fetch all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('items.item', 'name');
    res.json(orders);
});

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    const { items } = req.body;
    const order = new Order({ items });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
});

// @desc    Update order status
// @route   PUT /api/orders/:id
// @access  Private/Admin
const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = status;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

export { getOrders, createOrder, updateOrderStatus };