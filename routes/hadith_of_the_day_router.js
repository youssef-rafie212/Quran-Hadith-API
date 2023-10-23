import express from "express";

import * as hadithOfTheDayController from "../controllers/hadith_of_the_day_controller.js";

const router = express.Router();

router.get("/", hadithOfTheDayController.getHadithOfTheDay);

export default router;
