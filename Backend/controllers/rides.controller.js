const rideService = require('../services/rides.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   
    const { user_id, origin, destination,vehicalType } = req.body;
    try {
        const ride = await rideService.createRide(user_id, origin, destination,vehicalType);
        res.status(201).json({ ride });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};