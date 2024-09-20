import express from "express";
import authenticate from "../../../middleware/jwtAuthenticationMiddleware.js";
import controller from "../controller/productController.js";

const route = express.Router();

route.post("/register_product", authenticate, controller.productRegister);

export default route;
