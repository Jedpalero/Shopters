import express from "express";
import controller from "../controller/productController.js";

const route = express.Router();

route.post("/register_product", controller.productRegister);
route.put("/update_product", controller.productUpdate);
route.get("/get_all_products", controller.getAllProduct);

export default route;
