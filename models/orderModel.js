import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "NOT PROCESSED",
      enum: ["NOT PROCESSED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCEL"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
