import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import path from "path";

export const multerOptios = {
    storage: diskStorage({
        destination: (req, file, done) => {
            const uploadPath: string = 'public';
            if ( !existsSync(uploadPath) ) mkdirSync(uploadPath);
            done(null, uploadPath);
        },
        filename: (req, file, done) => {
            let ext = path.extname(file.originalname);
            done(null, `newFile${ext}`);
        }
    })
}