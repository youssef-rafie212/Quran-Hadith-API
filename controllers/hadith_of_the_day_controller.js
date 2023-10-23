import { catchAsync } from "../utils/catch_async.js";
import { getTodaysDateWithoutTime } from "../helpers/get_today_date_without_time.js";
import { getRandomDocument } from "../helpers/get_random_document.js";
import { Hadith } from "../models/hadith.js";
import { HadithOfTheDay } from "../models/hadith_of_the_day.js";
import hadithData from "../dev-data/Hadiths/hadiths.js";

export const getHadithOfTheDay = catchAsync(async (req, res, next) => {
  const today = getTodaysDateWithoutTime();

  const hadithOfTheDay = await HadithOfTheDay.findOne({ date: today });

  if (!hadithOfTheDay) {
    const randomHadith = await getRandomDocument(Hadith);

    const newHadithOfTheDay = await HadithOfTheDay.create({
      date: today,
      text: randomHadith.text,
      textEn: randomHadith.textEn,
    });

    res.status(200).json({
      status: "success",
      data: {
        hadith: newHadithOfTheDay,
      },
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        hadith: hadithOfTheDay,
      },
    });
  }
});
