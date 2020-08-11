import User from "../models/User";
import bcrypt from "bcrypt";

export const store = async (req, res) => {
  const { name, whatsapp, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(402).json({ error: "User alread exists!" });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      name,
      whatsapp,
      password: hashedPassword,
      email,
    });
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: "Impossible store in database" });
  }
};

export const index = async (req, res) => {
  const user = await User.find();
  return res.json(user);
};

export const show = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};
