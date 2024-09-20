import DB from "../../../config/database.js";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const productRegister = (req, res) => {
  const query = `INSERT INTO products(id, img, img1, img2, details, title, star, reviews, sold, prevPrice, newPrice, company, color, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  // const query = `
  //   INSERT INTO users (user_id, email, password, username, contact_no, status)
  //   VALUES ($1, $2, $3, $4, $5, $6)
  //   RETURNING user_id;`;

  const values = [
    req.body.id,
    req.body.img,
    req.body.img1,
    req.body.img2,
    req.body.details,
    req.body.title,
    req.body.star,
    req.body.reviews,
    req.body.sold,
    req.body.prevPrice,
    req.body.newPrice,
    req.body.company,
    req.body.color,
    req.body.category,
  ];

  DB.localDB.query(query, values, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Product registration failed. Please try again",
        err: err.message,
      });
    } else {
      res.status(200).json({ message: "Successfully add product" });
    }
  });
};

export default { productRegister };
