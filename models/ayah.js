import mongoose from "mongoose";
import paginate from "mongoose-paginate";

const ayahSchema = new mongoose.Schema({
  number: Number,
  text: String,
  textEn: String,
  surah: Number,
});

ayahSchema.plugin(paginate);

export const Ayah = mongoose.model("Ayah", ayahSchema);
