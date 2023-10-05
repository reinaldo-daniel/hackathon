import { Model } from "objection";

class DadosInfarto extends Model {
    static get tableName() {
        return "Dados_Infarto_Agudo_do_Miocardio";
    }

    static get idColumn() {
        return "USUARIO";
    }
}

export default DadosInfarto;