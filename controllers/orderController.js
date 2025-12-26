import Order from "../models/order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
      items,
      totalAmount,
      address,
      paymentMethod
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed" });
  }
};
