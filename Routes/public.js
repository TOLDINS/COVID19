const express=require('express');
const router=express.Router();
const controller=require('../Controllers/public');
router.get('/info_world',controller.getAllStatistics);
router.get('/info_ukraine',controller.getUkraineStatistics);
router.get('/info_region',controller.)
module.exports= router