import express from "express";
import pkg from "jsonwebtoken";
import cors from "cors";
import authRoute from "./module/auth_module/route/index.js";
import userRoute from "./module/user_module/route/index.js";
import productRoute from "./module/product_module/route/index.js";
import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import "dotenv/config";

const app = express();
const port = 8081;

const { sign } = pkg;

app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); //parse application/x-www-form-urlencoded; when using a post method
// app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

// Database Connection

//Use route
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

app.get("/generate_token", (req, res) => {
  //payload
  let payload = {
    user_id: "12345",
  };

  //secret key
  // let secret_key = "Supersecretkey";
  // let secret_key = process.env.ACCESS_TOKEN_SECRET; // to access the token in .env
  let secret_key = process.env.ACCESS_TOKEN_SECRET;
  //options
  let options = { expiresIn: "5m" }; //expires in 5 minutes

  let accessToken = sign(payload, secret_key, options);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  // console.log(`Server is running on port http://${host}:${port}`);
  console.log(`Server is running on port: ${port}`);
});
