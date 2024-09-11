import express from "express";
// import pkg from "jsonwebtoken";
import cors from "cors";
import authRoute from "./module/auth_module/route/index.js";
import userRoute from "./module/user_module/route/index.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import "dotenv/config";

const app = express();
const port = 8081;

// const { sign } = pkg;

app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); //parse application/x-www-form-urlencoded; when using a post method
// app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// Database Connection

//Use route
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  // console.log(`Server is running on port http://${host}:${port}`);
  console.log(`Server is running on port: ${port}`);
});
