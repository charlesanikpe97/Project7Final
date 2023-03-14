import express from "express";
import { getUser , updateUser} from "../Controllers/user.js";
import { deleteAccount } from "../Controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.delete("/:id", deleteAccount)


export default router