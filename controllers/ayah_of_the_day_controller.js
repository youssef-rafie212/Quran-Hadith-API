import { catchAsync } from "../utils/catch_async.js";
import { getTodaysDateWithoutTime } from "../helpers/get_today_date_without_time.js";
import { getRandomDocument } from "../helpers/get_random_document.js";
import { Ayah } from "../models/ayah.js";
import { AyahOfTheDay } from "../models/ayah_of_the_day.js";

export const getAyahOfTheDay = catchAsync(async (req, res, next) => {
  const today = getTodaysDateWithoutTime();

  const ayahOfTheDay = await AyahOfTheDay.findOne({ date: today });

  if (!ayahOfTheDay) {
    const randomAyah = await getRandomDocument(Ayah);

    const newAyahOfTheDay = await AyahOfTheDay.create({
      date: today,
      text: randomAyah.text,
      textEn: randomAyah.textEn,
    });

    res.status(200).json({
      status: "success",
      data: {
        ayah: newAyahOfTheDay,
      },
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        ayah: ayahOfTheDay,
      },
    });
  }
});
