import mongoose from "mongoose";
import paginate from "mongoose-paginate";

const hadithSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  text: String,
  textEn: String,
});

hadithSchema.plugin(paginate);

export const Hadith = mongoose.model("Hadith", hadithSchema);
