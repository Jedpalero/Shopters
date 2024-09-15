import express from "express";
import controller from "../controller/userController.js";
import authenticate from "../../../middleware/jwtAuthenticationMiddleware.js";

const route = express.Router();
// const controller = require("../controller/userController.js");

route.post("/create_user", authenticate, controller.createUser);
route.get("/get_all_users", authenticate, controller.getAllUser);
route.get("/get_user", authenticate, controller.getUser);
route.put("/update_user", authenticate, controller.updateUser);
route.delete("/delete_user/:user_id", authenticate, controller.deleteUser);

// module.exports = route
export default route;
