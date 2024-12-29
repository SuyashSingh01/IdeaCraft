
const cloudinary = require('cloudinary').v2;

// const UserFile = require('../models/UserFile');
// are not available in this snippet
// make an routes handler over here

exports.uploadImageCloudinary = async (file, folder, quality) => {
    const options = {
        folder,
    };
    options.resource_type = "auto";
    if (quality) {
        options.quality = quality;
    }
    // Upload the File on cloud
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        return result;
    } catch (error) {
        console.error(error);

    }
}


exports.localfileupload = async (req, res) => {
    try {
        // to access the file from req body we use heirarchy req.files.file;
        const file = req.files.file;
        console.log("file: ", file);
        // we can add extension in it 
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

        console.log("path: ", path);
        // then move the file on this path
        file.mv(path, (err) => {
            console.log(err);
        });
        res.status(200).json({
            message: "Local File uploaded successfully",
            success: true
        })

    } catch (err) {

        console.log(err);


    }
}

// make an routes handler over here for cloudinary uploading

exports.imageupload = async (req, res) => {
    try {

        const file = req.files.file;
        console.log("file: ", file);

        // validation whether it is supported or not
        const types = file.name.split(".")[1].toLowerCase();
        const supportedtype = ["jpg", "png", "jpeg", "webp"];
        const checkvalidtype = supportedtype.includes(types);

        // if file is valid type
        if (checkvalidtype) {

            const cloudinaryresponse = await uploadImageCloudinary(file, "Blog-Website-Image");
            console.log("cloudinaryres: ", cloudinaryresponse);
            // Create a new file record in the database
            const User = await UserFile.create({
                name: req.body.name,
                mediaurl: cloudinaryresponse.secure_url,
                email: req.body.email
            })
            return res.status(200).json({
                message: "Image uploaded successfully",
                success: true,
                data: User,
                imageurl: cloudinaryresponse.secure_url,
                publicid: cloudinaryresponse.public_id,
            });

        }
        else {
            return res.status(400).json({
                message: "File type not supported",
                success: false
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message,
            success: false
        })

    }
}
exports.videoupload = async (req, res) => {
    try {

        const file = req.files.file;
        console.log("file: ", file);

        // validation whether it is supported or not
        const types = file.name.split(".")[1].toLowerCase();
        const supportedtype = ["mov", "mkv", "mp4", "avi", "flv"];
        const checkvalidtype = supportedtype.includes(types);

        // if file is valid type
        if (checkvalidtype) {

            const cloudinaryresponse = await uploadImageCloudinary(file, "Suyashsingh-Video");
            console.log("cloudinaryres: ", cloudinaryresponse);
            // Create a new file record in the database
            const User = await UserFile.create({
                name: req.body.name,
                mediaurl: cloudinaryresponse.secure_url,
                email: req.body.email
            })
            return res.status(200).json({
                message: "Video uploaded successfully",
                success: true,
                data: User,
                videourl: cloudinaryresponse.secure_url,
                publicid: cloudinaryresponse.public_id,
            });

        }
        else {
            return res.status(400).json({
                message: "File type not supported",
                success: false
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message,
            success: false
        })

    }
}

// imagesizereducer 
exports.imagecompress = async (req, res) => {
    try {

        const file = req.files.file;
        console.log("file: ", file);

        // validation whether it is supported or not
        const types = file.name.split(".")[1].toLowerCase();
        const supportedtype = ["jpg", "png", "jpeg", "webp"];
        const checkvalidtype = supportedtype.includes(types);

        // if file is valid type
        if (checkvalidtype) {

            const cloudinaryresponse = await uploadImageCloudinary(file, "Suyashsingh-Image", 50);
            console.log("cloudinaryres: ", cloudinaryresponse);
            // Create a new file record in the database
            const User = await UserFile.create({
                name: req.body.name,
                mediaurl: cloudinaryresponse.secure_url,
                email: req.body.email
            })
            return res.status(200).json({
                message: "Image uploaded successfully",
                success: true,
                data: User,
                imageurl: cloudinaryresponse.secure_url,
                publicid: cloudinaryresponse.public_id,
            });

        }
        else {
            return res.status(400).json({
                message: "File type not supported",
                success: false
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message,
            success: false
        })

    }
}

// another way
// module.exports = { imageupload, videoupload, loacalfile };