import { db } from "../connectDB.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePic`=?,`coverPic`=? WHERE id=? ";

    db.query(
      q,
      [
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.coverPic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      }
    );
  });
};

export const deleteAccount = (req, res, next) => {
  if (req.body.password) {
      let q = `SELECT * FROM user WHERE id=?`;
      db.query (q, [req.params.id], function (err, result) {
          let user = result[0];
          bcrypt.compare(req.body.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ error: "Incorrect password!" });
                  } else {
                      bcrypt.hash(req.body.password, 10)
                          .then(hash => {
                              let q = `DELETE FROM user WHERE id=?`;
                              db.query(q, [req.params.id], function (err, result) {
                                  if (err) throw err;
                                  console.log(result);
                                  res.status(200).json({ message: `Account number ${req.params.id} deleted` });
                              });
                          })
                          .catch(error => res.status(500).json({ error }));
                  }
              })
              .catch(error => res.status(500).json({ message: "Authentication error" }));
      })
  }
}