const express=require('express');
const router=express.Router();


const {login,signup}=require('../controller/Auth');
const {auth,isAdmin,isRecuriter,isJobseeker,isWriter}=require('../middleware/auth')



// Routes

router.post('/login',login);
router.post('/signup',signup);

// Testing Purpose Routes
router.get('/test',auth,(req,res)=>{
    res.json({
        message:"Welcome to Test Routes",
        success:true
    })
})

// Protected Routes

router.get('/seeker/interview',auth,isJobseeker,(req,res)=>{
    res.json({
        message:"Welcome to Protected Routes of JobSeeker",
        success:true
    })
})
router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        message:"Welcome to Protected Routes of Admin",
        success:true
    })
})

router.get('/writer',auth,isWriter,(req,res)=>{
    res.json({
        message:"Welcome to Protected Routes of Writer",
        success:true
    })
})
router.get('/seeker',auth,isJobseeker,(req,res)=>{
    res.json({
        message:"Welcome to Protected Routes of JobSeeker",
        success:true
    })
})
router.get('/recuriter/opening',auth,isRecuriter,(req,res)=>{
    res.json({
        message:"Welcome to Protected Routes of Recuriter",
        success:true
    })
})


module.exports=router;