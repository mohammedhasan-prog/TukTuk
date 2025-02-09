const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");

dotenv.config();
app.use(cors());
app.use(cookieParser());
connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(  "/users", userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
