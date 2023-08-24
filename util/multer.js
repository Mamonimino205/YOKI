const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
    cloud_name: "dp7ffagv9",
    api_key: "449981832294131",
    api_secret: "Tb25C3oqQlrv3Vg3be4rUOJ1DrA",
});


module.exports =  new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: 'upload',
  },
});