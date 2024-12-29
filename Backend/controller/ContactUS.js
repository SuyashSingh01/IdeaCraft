const ContactMessage =require( '../models/ContactMessage.js');
const { contactUsEmail } = require("../mailTemplate/contactUsEmail.js");
const mailSender = require("../utils/sendEmail.js")

exports.contactUsController = async (req, res) => {
    const { email, name, message } = req.body
    console.log("contactus",req.body);
    try {
        if(!email||!name||!message){ 
            return res.json({
                success: false,
                message: "Please fill all the fields",
            })
        }

        const contactMessage = new ContactMessage({
            email: email,
            name: name,
            message: message,
        });
        const contactDetails = await contactMessage.save();
        console.log("Contact Details", contactDetails)
        if (!contactDetails) {
            return res.json({
                success: false,
                message: "Something went wrong...",
            })
        }
        const emailRes = await mailSender(
            email,
            "Your Data send successfully",
            contactUsEmail(email, name, message)
        )
        console.log("Email Res ", emailRes)
        return res.json({
            success: true,
            message: "Email send successfully",
        })
    } catch (error) {
        console.log("Error", error)
        console.log("Error message :", error.message)
        return res.json({
            success: false,
            message: "Something went wrong...",
        })
    }
}