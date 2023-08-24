const multer = require("multer");
const fs = require("fs");
const FTPStorage = require('multer-ftp-storage');

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

module.exports = new FTPStorage({
  ftp_config: {
    host: "http://ftp.lukra.net/",
    secure: false, // enables FTPS/FTP with TLS
    user: "rayne@geniu.app",
    password: "iKPJWdt68ch2hYk",
  },
});
