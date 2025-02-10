const express=require('express');
const {body}= require('express-validator');
const captainController=require('../controllers/captain.controller');
const { routes } = require('../app');
const authMiddleware=require('../middleware/auth.middleware');

const router=express.Router();


router.post('/register',
    [body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 5 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be atleast 3 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({min:5}).withMessage('Plate must be atleast 5 characters long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be atleast 1 characters long'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','Auto']).withMessage('Invalid vehicle type')
    ],
    captainController.registerCaptain
)

router.post('/login',[body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 5 characters long')
],captainController.loginCaptain);
module.exports=router;

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile) ;
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain) ;
