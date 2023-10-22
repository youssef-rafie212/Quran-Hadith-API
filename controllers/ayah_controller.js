import * as handlerFactory from "./handler_factory.js";
import { Ayah } from "../models/ayah.js";

export const getAllAyat = handlerFactory.getAll(Ayah);
export const getAyah = handlerFactory.getOne(Ayah);
