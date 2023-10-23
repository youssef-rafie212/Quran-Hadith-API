import express from "express";

import * as ayahOfTheDayController from "../controllers/ayah_of_the_day_controller.js";

const router = express.Router();

router.get("/", ayahOfTheDayController.getAyahOfTheDay);

export default router;
