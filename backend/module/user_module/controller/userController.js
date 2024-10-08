/*eslint no-unused-vars*/

import DB from "../../../config/database.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
// import pkg from "jsonwebtoken";
import date_and_time from "date-and-time";

const now = new Date();

// const { sign } = pkg;
const salt = bcrypt.genSaltSync(1);

uuidv4();

const createUser = (req, res) => {
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

// const getAllUser = (req, res) => {
//   const query = `SELECT * FROM users`;
//   DB.localDB.query(query, (err, results) => {
//     if (err) {
//       res.status(500).json({ message: "Failed to get user" });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// };
const getAllUser = (req, res) => {
  const query = `SELECT user_id, first_name, last_name, email, role FROM users`;
  DB.localDB.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Failed to get user" });
    } else {
      res.status(200).json(results);
    }
  });
};

const getUser = (req, res) => {
  const query = `SELECT * FROM users WHERE user_id = ?`;
  const value = [req.body.user_id];

  DB.localDB.query(query, value, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Failed to get user" });
    } else {
      res.status(200).json({ results });
      // const sanitizedResults = results.map((user) => {
      //   const { password, ...rest } = user;
      //   return rest;
      // });
      // res.status(200).json(sanitizedResults); // to remove password from console
      // res.status(200).json({ results: sanitizedResults });
    }
  });
};

const updateUser = (req, res) => {
  const query = `UPDATE users
                  SET first_name = ?, last_name = ?, email = ?,  updated_at = ?
                  WHERE user_id = ?`;

  let values = [
    req.body.first_name,
    req.body.last_name,
    // req.body.status,
    req.body.email,
    date_and_time.format(now, "YYYY-MM-DD HH:mm:ss"),
    req.body.user_id,
  ];
  DB.localDB.query(query, values, (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ message: " Failed to update", error: err.message });
    } else {
      // res.status(200).json({ message: "Updated" });
      res.status(200).json(results);
    }
  });
};

const deleteUser = (req, res) => {
  try {
    const query = `DELETE from users where user_id = ?`;
    const value = [req.params.user_id];

    DB.localDB.query(query, value, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Failed to delete" });
      } else {
        res.status(200).json({ message: "User deleted" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error" });
    throw error;
  }
};

// const

export default { createUser, getAllUser, getUser, updateUser, deleteUser };
