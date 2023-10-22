import * as handlerFactory from "./handler_factory.js";
import { Hadith } from "../models/hadith.js";

export const getAllHadiths = handlerFactory.getAll(Hadith);
export const getHadith = handlerFactory.getOne(Hadith);
