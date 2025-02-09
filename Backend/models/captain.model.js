const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Minimum 3 characters required"],
    },
    lastname: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Minimum 5 characters required"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "offline",
    enum: ["online", "offline"],
  },

  vehicle: {
    color: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Minimum 5 characters required"],
    },

    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Minimum 1 characters required"],
    },

    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "Auto"],
    },

    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const captain = this;
  const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 12);
};

captainSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;
