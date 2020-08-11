import { Schema, model } from "mongoose";

const LostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    price: Number,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

LostSchema.virtual("lost_url").get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default model("Lost", LostSchema);
