const express=require('express');
const router=express.Router();


const {updateprofileDetails,deleteprofile,getProfileDetails,updateDisplayPicture,getallSubscribedBlog}=require('../controller/Profile');
const {auth}=require('../middleware/auth')



// Routes
// router.get('/profile',auth,getProfileDetails);
router.get('/profile',auth,getProfileDetails);
router.get('/getallsubscribedblog',auth,getallSubscribedBlog);
router.put('/profileupdate',auth,updateprofileDetails);
router.put('/updateDisplaypic',auth,updateDisplayPicture);
router.delete('/deleteprofile',auth,deleteprofile);


module.exports=router;


