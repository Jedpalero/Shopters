import pkg from "mysql2";

// const { mysql } = pkg;

let config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "shopdb",
};

const localDB = pkg.createPool(config);

localDB.getConnection((err) => {
  if (err) {
    console.log("Database connection is not established", err.message);
  } else {
    console.log("Database connected");
  }
});

// module.exports = { localDB };

export default { localDB };
