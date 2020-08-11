import User from "../models/User";
import Found from "../models/Found";

export const store = async (req, res) => {
  const { name, discription } = req.body;
  const { filename } = req.file;
  const { user_id } = req.headers;

  const user = await User.findById(user_id);

  if (!user) {
    return res.status(402).json({ error: "User not found" });
  }

  const found = await Found.create({
    name,
    discription,
    thumbnail: filename,
    user_id: user._id,
  });

  user.founds.push(found._id);

  await user.save();
  return res.json(found);
};

export const index = async (req, res) => {
  const found = await Found.find().populate('user_id');
  return res.json(found);
};

export const show = async (req, res) => {
  const { itemId } = req.params;
  const lost = await Found.findById(itemId).populate('user_id');
  if (!lost) return res.status(404).json({ error: "Item not found" });
  return res.json(lost);
};
