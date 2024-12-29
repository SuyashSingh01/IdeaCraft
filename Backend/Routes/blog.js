const express=require('express');
const router=express.Router();

const {createblog,updateblog,deleteblog,getallblogs,getblogsbyId,saveBlogs,getsaveBlogs,getRecommendBlogs}=require('../controller/Blog');
const  {auth}=require('../middleware/auth');
const {authorize} = require('../middleware/authorize');


// Routes
router.get('/blogs',auth, getallblogs);
router.get('/blogs/:blogId',auth,getblogsbyId);
router.post('/createblog',auth,authorize('Writer'),createblog);
router.put('/updateblog/:blogId',auth,updateblog);
router.delete('/deleteblog/:blogId',auth,deleteblog);
router.post('/save-blog', auth, saveBlogs);
router.get('/saved-blogs/:userId', auth, getsaveBlogs);

router.get('/recommend-blogs/:userId', auth, getRecommendBlogs);
  



module.exports=router;
