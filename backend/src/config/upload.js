import multer from "multer";
import path from "path";

const options = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) => {
      const extension = path.extname(file.originalname);
      const name = path.basename(file.originalname, extension);

      callback(null, `${name}-${Date.now()}${extension}`);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error("Only images files allowed!"), false);
    }
    callback(null, true);
  },
};

export default options;
