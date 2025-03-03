const express=require('express');

const router=express.Router();
const authMiddleware=require('../middleware/auth.middleware');
const {body}=require('express-validator');
const rideController=require('../controllers/ride.controller');

router.post('/create-ride',
    body('user_id').isString().withMessage('invlid User Id'),
    body('origin').isString().withMessage('invalid origin'),
    body('destination').isString().withMessage('invalid destination')

,rideController.createRide);

module.exports=router;

