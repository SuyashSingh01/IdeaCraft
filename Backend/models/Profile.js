const mongoose=require("mongoose");


const profileschema=new mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    gender:{
        
        type:String,
    },
    education:{
        type:String,
        trim:true,
    },
    country:{
        type:String,
        trim:true,
    },
    about: {
		type: String,
		trim: true,
	},
    contactnumber:{
        type:Number,
        trim:true,
    },
    profilepic:{
        type:String,
    },
    dateofBirth:{
        type:Date,
    },
    address:{
        type:String,
        trim:true,
    }
})
module.exports=mongoose.model('profile',profileschema);