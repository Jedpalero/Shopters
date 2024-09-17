/* eslint-disable no-unused-vars */

import DB from "../../../config/database.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
import "dotenv/config";

// const { sign } = pkg; //jwt
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
      return res.status(500).json({ message: "Error fetching user" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];

    // if (results.length) {
    //   bcrypt.compare(password, user.password, (err, result) => {
    //     const payload1 = { id: user.user_id, email: user.email };
    //     // payload1.role = "Admin";
    //     const secret_key = process.env.ACCESS_TOKEN_SECRET;
    //     const options = { expiresIn: "5m" };
    //     const accesstoken = sign(payload1, secret_key, options);

    //     res.cookie("jwt", accesstoken, {
    //       httpOnly: true,
    //       maxAge: 24 * 60 * 60 * 1000,
    //     });
    //     res.send({
    //       message: "success",
    //     });
    //     result
    //       ? res.status(200).json({
    //           token: accesstoken,
    //           message: "Login Success",
    //           payload: payload1,
    //         })
    //       : res.status(500).json({ message: "Invalid Password" });
    //   });
    // } else {
    //   res.status(401).json({ message: "Invalid password" });
    // }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!result) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const payload1 = { user_id: user.user_id, email: user.email }; // Adjust payload as needed
      const secret_key = process.env.ACCESS_TOKEN_SECRET;
      const options = { expiresIn: "5m" };
      const accesstoken = pkg.sign(payload1, secret_key, options);

      res.cookie("jwt", accesstoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        token: accesstoken,
        message: "Login Success",
        payload: payload1,
      });
    });
  });
};

const user = async (req, res) => {
  const secret_key = process.env.ACCESS_TOKEN_SECRET;
  const cookie = req.cookies["jwt"];

  try {
    const claims = pkg.verify(cookie, secret_key);
    if (!claims) {
      return res.status(401).send({ message: "unauthenticated" });
    }

    // DB.localDB.getConnection((err, connection) => {
    //   if (err) {
    //     return res.status(500).send({ message: "Database connection error" });
    //   }

    DB.localDB.query(
      "SELECT * FROM users WHERE user_id = ?",
      [claims.user_id],
      (queryErr, rows) => {
        // connection.release();

        if (queryErr) {
          return res.status(500).send({ message: "Database query error" });
        }

        const user = rows[0];
        const payload = {
          user_id: user.user_id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        };

        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        return res.send(payload);
      }
    );
    // });
  } catch (error) {
    return res.status(401).send({ message: "unauthenticated" });
  }
};

const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success",
  });
};

export default { register, login, user, logout };
