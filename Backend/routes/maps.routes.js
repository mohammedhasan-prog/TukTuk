const express=require('express');
const router=express.Router();  
const authMiddleware=require('../middleware/auth.middleware');
const {query}=require('express-validator');
const mapController=require('../controllers/map.controller');



router.get('/get-coordinates',query('address').isLength({min:3}),authMiddleware.authUser,   mapController.getCordinates);


router.get('/get-distance',query('origin').isLength({min:3}),query('destination').isLength({min:3}),authMiddleware.authUser,   mapController.getDistance);

router.get('/get-suggestion',query('input').isLength({min:3}),authMiddleware.authUser,   mapController.getSuggestion);
 
module.exports=router;
