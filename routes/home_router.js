import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message:
      "Hi there :> , read the documentation at https://github.com/youssef-rafie212/Quran-Hadith-API to use our API",
  });
});

export default router;
