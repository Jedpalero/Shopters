import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res
      .status(401)
      .send({ message: "Access Denied: No Token Provided!!!" });

  const accessToken = token.split(" ")[1];
  const secret_key = process.env.ACCESS_TOKEN_SECRET;

  // jwt.verify(token, secret_key, callback function)
  jwt.verify(accessToken, secret_key, (err, decoded) => {
    if (err) {
      // Token has an error
      switch (
        err.name // err.name console TokenExpiredError whiele err.message jwt expired;
      ) {
        case "TokenExpiredError":
          return res
            .status(401)
            .send({ message: "Access Denied: Token Expired!" });
        case "JsonWebTokenError":
          return res
            .status(401)
            .send({ message: "Access Denied: Invalid Token Signature" });

        default:
          return res
            .status(401)
            .send({ message: "Access Denied: Invalid Token" });
      }
    } else {
      next();
    }
  });
};

export default authenticate;
