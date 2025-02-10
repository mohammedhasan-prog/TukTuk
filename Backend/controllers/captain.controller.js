const blackListTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;
  const isCaptain = await captainModel.findOne({ email });
  if (isCaptain) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain1 = await captainModel.findOne({ email }).select("+password");

  const isMatch = await captain1.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email and password" });
  }

  const token = captain1.generateAuthToken();

  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ token, captain1 });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    await blackListTokenModel.create({ token });

    res.clearCookie("token");

    res.status(200).json({ message: "Logged out successfully" });
  }

