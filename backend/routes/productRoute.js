import express from "express";
import {addItem,listItems,removeProduct} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

//Image Storage Engine
const storage  = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
       return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage});

//post request
productRouter.post("/add",upload.single("image"),addItem);
productRouter.get("/list",listItems);
productRouter.post("/remove",removeProduct);

export default productRouter;