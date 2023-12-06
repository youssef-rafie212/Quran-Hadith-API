import express from "express";
import helmet from "helmet";
import cors from "cors";

import AppError from "./utils/app_error.js";
import errorHandler from "./utils/error_handler.js";
import homeRouter from "./routes/home_router.js";
import surahRouter from "./routes/surah_router.js";
import ayahRouter from "./routes/ayah_router.js";
import hadithRouter from "./routes/hadith_router.js";
import ayahOfTheDayRouter from "./routes/ayah_of_the_day_router.js";
import hadithOfTheDayRouter from "./routes/hadith_of_the_day_router.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/", homeRouter);
app.use("/api/v1/surahs", surahRouter);
app.use("/api/v1/ayat", ayahRouter);
app.use("/api/v1/hadiths", hadithRouter);
app.use("/api/v1/ayah-of-the-day", ayahOfTheDayRouter);
app.use("/api/v1/hadith-of-the-day", hadithOfTheDayRouter);

app.all("*", (req, res, next) => {
  next(new AppError("could not find this URL on this server", 404));
});

app.use(errorHandler);

export default app;
