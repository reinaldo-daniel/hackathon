import 'dotenv/config';
import express from "express";
import Knex from "knex";
import { Model } from "objection";

import knexConfig from "./database/knexfile.js";
import { cadastroUser, login } from "./src/domains/users/controller.js"
import patients from './src/domains/patients/routes.js';

Model.knex(Knex(knexConfig));

const app = express();

app.use(express.json());

app.post("/login", login);
app.post("/cadastro-user", cadastroUser);
app.use("/pacientes", patients)

app.listen(process.env.APP_PORT, () => {
    console.log('Rodando na porta: ', process.env.APP_PORT);
})