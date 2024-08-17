import mongoose from "mongoose";
import { userSchema } from "./Schema.js";

export const User = mongoose.model('User', userSchema);
