// backend/controllers/itemcontroller.js
import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';

// @desc    Fetch all items
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({});
    res.json(items);
});

// @desc    Create a new item
// @route   POST /api/items
// @access  Private/Admin
const createItem = asyncHandler(async (req, res) => {
    const { name, description, image, stock } = req.body;
    const item = new Item({ name, description, image, stock });
    const createdItem = await item.save();
    res.status(201).json(createdItem);
});

// @desc    Update an item
// @route   PUT /api/items/:id
// @access  Private/Admin
const updateItem = asyncHandler(async (req, res) => {
    const { name, description, image, stock } = req.body;
    const item = await Item.findById(req.params.id);

    if (item) {
        item.name = name;
        item.description = description;
        item.image = image;
        item.stock = stock;
        const updatedItem = await item.save();
        res.json(updatedItem);
    } else {
        res.status(404);
        throw new Error('Item not found');
    }
});

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Private/Admin
const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (item) {
        await item.remove();
        res.json({ message: 'Item removed' });
    } else {
        res.status(404);
        throw new Error('Item not found');
    }
});
export { getItems, createItem, updateItem, deleteItem };