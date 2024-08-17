import mongoose from "mongoose";
import { formSchema } from "./Schema.js";

export const Form = mongoose.model('Form', formSchema);
