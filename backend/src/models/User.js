import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    founds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Found",
      },
    ],
    losts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lost",
      },
    ],
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

UserSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default model("User", UserSchema);
