import express from "express";

import * as hadithController from "../controllers/hadith_controller.js";

const router = express.Router();

router.get("/", hadithController.getAllHadiths);

router.get("/:hadithNumber", hadithController.getHadith);

export default router;
