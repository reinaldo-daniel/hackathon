import { Router } from "express";
import {patients, patient} from "./controller.js";

const route = Router();

route.get('/', patients)
route.get('/:id', patient)

export default route;