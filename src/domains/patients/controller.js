import Dados from "../potentialRisks/model.js";
import DadosInfarto from "./model.js"

async function patients(request, response, next) {
    try {
        const patientsReturn = await DadosInfarto.query();

        response.status(200)
            .send(patientsReturn);
    } catch(error) {
        next(error)
    }
}

async function patient(request, response, next) {
    try {
        const {params} = request;
        const {id} = params;

        const patientsReturn = await Dados.query()
            .where('USUARIO', id);

        response.status(200)
            .send(patientsReturn);
    } catch(error) {
        next(error)
    }
}

export {
    patients,
    patient
}