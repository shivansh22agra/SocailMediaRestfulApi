import express from "express";
import mongoose from "mongoose";
import router from "./routes/user_route.js";


const app = express();
app.use(express.json());
app.use("/api/user", router);


mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://shivansh:Password123@cluster0.ndhbryo.mongodb.net/Blog?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => app.listen(5000, () => console.log("shuru hua")))
  .catch((err) => console.log(err));
// const app = express();
// app.use("/", (req, res, next) => {
//   console.log("Hello World");
// });
