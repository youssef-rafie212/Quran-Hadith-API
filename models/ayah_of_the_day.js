import mongoose from "mongoose";

const ayahOfTheDaySchema = new mongoose.Schema({
  date: Date,
  text: String,
  textEn: String,
});

export const AyahOfTheDay = mongoose.model("AyahOfTheDay", ayahOfTheDaySchema);
