import express from "express";

import * as ayahController from "../controllers/ayah_controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", ayahController.getAllAyat);

router.get("/:ayahNumber", ayahController.getAyah);

export default router;
