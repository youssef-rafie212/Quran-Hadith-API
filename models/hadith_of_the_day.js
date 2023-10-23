import mongoose from "mongoose";

const hadithOfTheDaySchema = new mongoose.Schema({
  date: Date,
  text: String,
  textEn: String,
});

export const HadithOfTheDay = mongoose.model(
  "HadithOfTheDay",
  hadithOfTheDaySchema
);
