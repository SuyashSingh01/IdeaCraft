const Profile=require('../models/Profile');



exports.updateprofile = async (req, res) => {
    const {id, gender,username ,about,education,contactnumber,country} = req.body;
    try {
        // check whether the username exist or not 
        // allot if not taken by someone
        // update the profile of user

        const 
    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while Signing Up",
            error: err.message
        })
    }
}
exports.deleteprofile = async (req, res) => {
    const {  id,email } = req.body;
    try {

        const 
    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while Deleting Up",
            error: err.message
        })
    }
}