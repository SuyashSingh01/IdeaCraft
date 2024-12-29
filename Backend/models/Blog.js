const mongoose=require("mongoose");

const blogschema=new mongoose.Schema({

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    isPublished:{
        type:Boolean,
        default:false,
        // type:String,
        // enum:['Draft','Published'],

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    visibility:{
        type:String,
        enum:['Private','Public'],
        default:'Public',
    },
},{timestamps:true});

module.exports=mongoose.model('blog',blogschema);