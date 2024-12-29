const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controller/ContactUS")

// const {createNewsletter,deleteNewsletter,getallNewsletters,getNewsletterbyId}=require('../controller/Newsletter');


// router.get('/newsletter', getallNewsletters);
// router.get('/newsletter/:newsletterId',getNewsletterbyId);
// router.post('/createNewsletter',createNewsletter);
// router.delete('/deleteNewsletter/:newsletterId',deleteNewsletter);

router.post("/contact", contactUsController)

module.exports = router