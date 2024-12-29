const express=require('express');
const router=express.Router();

const {subscribe,unsubscribe} = require('../controller/Subscription');

router.post('/subscribe/:authorId',subscribe);
router.post('/unsubscribe/:authorId',unsubscribe);

module.exports=router;
