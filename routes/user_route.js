import express from "express";
import { getAllUser,signUp} from "../controllers/user_controller.js";

const router = express.Router();
router.get("/", getAllUser);
router.post("/signup",signUp);
export default router;
// router.app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })
