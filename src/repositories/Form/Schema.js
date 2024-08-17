import mongoose from "mongoose";

export const formSchema = new mongoose.Schema({
  formFields: {
    type: [
      {
        field: { type: String, required: true },
        type: { type: String, required: true },
        size: { type: mongoose.Schema.Types.Mixed, required: true },
        isRequired: { type: mongoose.Schema.Types.Mixed, required: true },
      },
    ],
    required: true,
  },
});
