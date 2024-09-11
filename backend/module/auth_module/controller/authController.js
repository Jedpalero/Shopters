import DB from "../../../config/database.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
// import pkg from "jsonwebtoken";

// const { sign } = pkg;
const salt = bcrypt.genSaltSync(1);

uuidv4();

const register = (req, res) => {
  const query = `INSERT INTO users(user_id, email, password, first_name, last_name, status) VALUES (?, ?, ?, ?, ?, ?)`;
  // const query = `
  //   INSERT INTO users (user_id, email, password, username, contact_no, status)
  //   VALUES ($1, $2, $3, $4, $5, $6)
  //   RETURNING user_id;`;

  const values = [
    // req.body.user_id,
    uuidv4(),
    req.body.email,
    // req.body.password,
    bcrypt.hashSync(req.body.password, salt),
    req.body.first_name,
    req.body.last_name,
    req.body.status,
  ];

  DB.localDB.query(query, values, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Registration failed. Please try again",
        err: err.message,
      });
    } else {
      res.status(200).json({ message: "Successfully add user" });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;
  const value = [email];

  DB.localDB.query(query, value, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error fetching user" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // const secret_key = process.env.ACCESS_TOKEN_SECRET;

    const user = results[0];
    // let payload = {
    //   user_id: user.user_id,
    // };
    // const isPasswordValid = bcrypt.compareSync(password, user.password);
    // const options = {
    //   expiresIn: "1h", // Set an appropriate expiration time
    // };
    // const token = jwt.sign(payload, secret_key, options);

    if (results.length) {
      // res.status(200).json({
      //   user_id: user.user_id,
      //   email: user.email,
      //   username: user.username,
      //   contact_no: user.contact_no,
      //   status: user.status,
      //   token: token,
      // });
      bcrypt.compare(password, user.password, (err, result) => {
        const payload1 = results[0];
        // payload1.role = "Admin";
        // const secret_key = process.env.ACCESS_TOKEN_SECRET;
        // const options = { expiresIn: "5m" };
        // const accesstoken = sign(payload1, secret_key, options);
        // const accesstoken = sign(payload1);
        result
          ? res.status(200).json({
              // token: accesstoken,
              message: "Login Success",
              payload: payload1,
            })
          : res.status(500).json({ message: "Invalid Password" });
      });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  });
};

export default { register, login };
