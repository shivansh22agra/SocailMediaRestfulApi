import User from "../model/User.js";
import bcrypt from "bcryptjs";
export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    const error = new Error("Something went wrong");
    return next(error);
  }
  if (!users) {
    return res.status(404).json({
      message: "No user found",
    });
  }
  return res.status(200).json({ users });
};
export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }
  const hashedCode=bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password:hashedCode,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user });
};
