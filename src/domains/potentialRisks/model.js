import { Model } from "objection";

class Dados extends Model {
    static get tableName() {
        return "Dados";
    }

    static get idColumn() {
        return "USUARIO";
    }
}

export default Dados;