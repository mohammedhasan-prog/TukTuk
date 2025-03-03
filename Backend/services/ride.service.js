const rideModel = require('../models/ride.model');
const mapService=require('../services/map.service');
const crypto = require('crypto');


module.exports.createRide = async (req, res) => {

    const { user_id, origin, destination,vehicalType } = req.body;

   const fair = await getFare(origin, destination);
   const ride= await rideModel.create({ user_id, origin, destination, fair,otp:getOTP(4),vehicalType });
   res.status(201).json({ride});
}

module.exports.getOTP=function getOTP(num){
    let otp = '';
    for (let i = 0; i < num; i++) {
        otp += crypto.randomInt(0, 10);
    }
    return otp;
}
async function getFare(origin,distance){
if(!origin || !distance){
    throw new Error('Origin and distance are required');
}

const distance=await mapService.getDistance(origin,destination); 

const rates = {
    car: 1.5,  // rate per distance unit for car
    bike: 1.0, // rate per distance unit for bike
    auto: 2.0  // rate per distance unit for auto
};

const carFare = distance * rates.car;
const bikeFare = distance * rates.bike;
const autoFare = distance * rates.auto;

return { car: carFare, bike: bikeFare, auto: autoFare };
}