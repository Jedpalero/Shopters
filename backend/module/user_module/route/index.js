import express from "express";
import controller from "../controller/userController.js";

const route = express.Router();
// const controller = require("../controller/userController.js");

route.post("/create_user", controller.createUser);
route.get("/get_all_users", controller.getAllUser);
route.get("/get_user", controller.getUser);
route.put("/update_user", controller.updateUser);
route.delete("/delete_user/:user_id", controller.deleteUser);

// module.exports = route
export default route;
