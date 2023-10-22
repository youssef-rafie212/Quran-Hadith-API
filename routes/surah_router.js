import express from "express";

import * as surahController from "../controllers/surah_controller.js";
import ayahRouter from "./ayah_router.js";

const router = express.Router();

router.use("/:surahNumber/ayat", ayahRouter);

router.get("/", surahController.getAllSurahs);

router.get("/:surahNumber", surahController.getSurah);

export default router;
