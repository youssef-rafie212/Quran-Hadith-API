import * as handlerFactory from "./handler_factory.js";
import { Surah } from "../models/surah.js";

export const getAllSurahs = handlerFactory.getAll(Surah);
export const getSurah = handlerFactory.getOne(Surah);
