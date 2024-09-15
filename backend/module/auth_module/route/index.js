import express from "express";
import controller from "../controller/authController.js";

const route = express.Router();
// const controller = require("../controller/userController.js");

route.post("/register", controller.register);
route.post("/login", controller.login);
route.post("/logout", controller.logout);
route.get("/user", controller.user);
// route.get("/get_all_users", controller.getAllUser);

export default route;
