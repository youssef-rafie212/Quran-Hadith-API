import mongoose from "mongoose";
import paginate from "mongoose-paginate";

const surahSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  surahName: String,
  surahNameEn: String,
  noOfWords: Number,
  noOfLetters: Number,
  type: String,
  typeEn: String,
  text: String,
  textEn: String,
});

surahSchema.plugin(paginate);

export const Surah = mongoose.model("Surah", surahSchema);
