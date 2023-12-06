import AppError from "../utils/app_error.js";
import { catchAsync } from "../utils/catch_async.js";

export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filters = {};
    const page = req.query.page || 1;
    const limit = req.query.limit || 15000;

    if (req.params.surahNumber) filters = { surah: req.params.surahNumber };

    const paginator = await Model.paginate(filters, { page, limit });
    const docs = paginator.docs;

    res.status(200).json({
      status: "success",
      page: paginator.page,
      length: docs.length,
      data: {
        docs,
      },
    });
  });

export const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let filters = {};

    if (req.params.surahNumber && req.params.ayahNumber) {
      filters = {
        number: req.params.ayahNumber,
        surah: req.params.surahNumber,
      };
    } else if (req.params.surahNumber) {
      filters = { number: req.params.surahNumber };
    } else if (req.params.hadithNumber) {
      filters = { number: req.params.hadithNumber };
    }

    const doc = await Model.findOne(filters);

    if (!doc)
      return next(new AppError("no document found with that number", 404));

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
