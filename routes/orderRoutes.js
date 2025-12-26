import express from "express";
import Order from "../models/order.js";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

// CREATE new order
router.post("/", createOrder);

// GET all orders (Admin)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items.productId");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
});

// GET order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.productId");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching order" });
  }
});

export default router;
