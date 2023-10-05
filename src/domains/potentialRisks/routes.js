import { Router } from "express";
import controller from "./controller.js";

const route = Router();

route.get('/', controller.retornaTeste)
// route.post()

export default route;