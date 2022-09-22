// // Required modules
// const http = require('http');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');


// //https://www.npmjs.com/package/dotenv
// const cloudinary = require("cloudinary").v2;
// require('dotenv').config()

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Cloudinary configuration settings
// // This will be fetched from the .env file in the root directory
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// // image upload API
// app.post("/upload", (req, res) => { 
//     // collected image from a user
//     const data = {
//       image: req.body.image
//     }

//     // upload image here
//     cloudinary.uploader.upload(`MXPlayer/${data.image}`)
//     .then((result) => {
//       res.status(200).send({
//         message: "success",
//         result,
        
//       });
//       console.log(result.url)
//     }).catch((error) => {
//       res.status(500).send({
//         message: "failure",
//         error,
//       });
//     });
// });

// app.listen(5000,()=>{
//   console.log('server started on 5000...');
// });