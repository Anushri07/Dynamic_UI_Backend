import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
  },
});
