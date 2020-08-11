import User from "../models/User";
import Lost from "../models/Lost";

export const store = async (req, res) => {
  const { name, discription, price } = req.body;
  const { filename } = req.file;
  const { user_id } = req.headers;
  const user = await User.findById(user_id);
  if (!user) return res.status(402).json({ error: "User not Found" });
  const lost = await Lost.create({
    name,
    discription,
    thumbnail: filename,
    user_id: user._id,
    price: parseFloat(price),
  });
  user.losts.push(lost._id);
  await user.save();
  return res.json(lost);
};

export const index = async (req, res) => {
  const lost = await Lost.find();
  return res.json(lost);
};

export const show = async (req, res) => {
  const { itemId } = req.params;
  const lost = await Lost.findById(itemId);
  if (!lost) return res.status(404).json({ error: "Item not found" });
  return res.json(lost);
};
