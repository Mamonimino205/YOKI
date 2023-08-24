const multer = require("multer");
const fs = require("fs");

// module.exports = multer.diskStorage({
//   filename: (req, file, callback) => {
//     const filename =
//       Date.now() + Math.floor(Math.random() * 100) + file.originalname.replace(/ /g, "");
//     callback(null, filename);
//   },
//   destination: (req, file, callback) => {
//     if (!fs.existsSync("storage")) {
//       fs.mkdirSync("storage");
//     }
//     callback(null, "storage");
//   },
// });

module.exports = multer.diskStorage({
  sftp: {
    host: 'http://ftp.lukra.net/',
    port: 21,
    username: 'rayne@geniu.app',
    password: 'iKPJWdt68ch2hYk'

  },
  filename: (req, file, callback) => {
    const filename =
      Date.now() + Math.floor(Math.random() * 100) + file.originalname.replace(/ /g, "");
    callback(null, filename);
  },
  destination: (req, file, callback) => {
    if (!fs.existsSync("storage")) {
      fs.mkdirSync("storage");
    }
    callback(null, "storage");
  },
});
