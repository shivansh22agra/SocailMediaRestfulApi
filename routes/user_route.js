import express from "express";
import { getAllUser} from "../controllers/user_controller.js";
const router = express.Router();
router.get("/", getAllUser);
export default router;
// router.app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })
