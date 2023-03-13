import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();


export const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: process.env.DATABASE_PORT,
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

