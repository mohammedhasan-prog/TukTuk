const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    captain_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Captain",
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled", "ongoing"],
      default: "pending",
    },
    fair: {
      type: Number,
      default: 0,
    },
    distance: {
      type: String,
    },
    payment_id: {
      type: String,
    },
    order_id: {
      type: String,
    },
    String: {
      type: String,
    },
    otp:{
        type:String,
        select:false,
        required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
