import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import 'dotenv/config'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file has been Uploaded Successfully
        console.log("file is Uploaded");
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log("file not Uploaded", error);
        return null;
    }
};

export { uploadOnCloudinary };