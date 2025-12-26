import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
        name: String,
        price: Number,
        qty: Number,
        image: String
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    paymentMethod: {
      type: String,
      default: "Cash on Delivery"
    },

    status: {
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
