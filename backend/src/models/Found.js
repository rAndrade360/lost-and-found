import { Schema, model } from "mongoose";

const FoundSchema = new Schema(
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
    toObject: { virtuals: true },
  }
);

FoundSchema.virtual("found_url").get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default model("Found", FoundSchema);
