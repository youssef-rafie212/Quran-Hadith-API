import mongoose from "mongoose";
import dotenv from "dotenv";

import quranData from "../dev-data/Quran/Quran.js";
import hadithsData from "../dev-data/Hadiths/hadiths.js";
import { Surah } from "../models/surah.js";
import { Ayah } from "../models/ayah.js";
import { Hadith } from "../models/hadith.js";

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  });

// Format the data to match its model
const surahs = quranData.map((surah) => {
  return {
    number: surah.id,
    surahName: surah.name,
    surahNameEn: surah.name_translation,
    noOfWords: surah.words,
    noOfLetters: surah.letters,
    type: surah.type,
    typeEn: surah.type_en,
    text: surah.ar,
    textEn: surah.en,
  };
});

const ayahs = quranData
  .map((surah) => {
    return surah.array.map((ayah) => {
      return {
        number: ayah.id,
        text: ayah.ar,
        textEn: ayah.en,
        surah: surah.id,
      };
    });
  })
  .flat();

const hadiths = hadithsData.map((hadith) => {
  return {
    number: hadith.id,
    text: hadith.arabic,
    textEn: hadith.english.text,
  };
});

const importAllData = async () => {
  try {
    await Surah.create(surahs, { ordered: true });
    await Ayah.create(ayahs, { ordered: true });
    await Hadith.create(hadiths, { ordered: true });
    console.log("data imported");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteAllData = async () => {
  try {
    await Surah.deleteMany();
    await Ayah.deleteMany();
    await Hadith.deleteMany();
    console.log("data deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  // node scripts/import_dev_data.js --import
  importAllData();
} else if (process.argv[2] === "--delete") {
  // node scripts/import_dev_data.js --delete
  deleteAllData();
}
