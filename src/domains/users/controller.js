import Users from "./model.js"

async function login(request, response, next) {
    try {
        const { body } = request;
        const { email, senha } = body;

        const user = await Users.query()
            .where('email', email)
            .where('password', senha)
            .first();

        if(!user) return response.sendStatus(403);

        response.status(200)
            .send(user);
    } catch(error) {
        next(error)
    }
}

async function cadastroUser(request, response, next) {
    try {
        const { body } = request;
        const { nome, email, senha, type } = body;

        const addNewUser = await Users.query()
            .insert({ 
                type,
                email,
                name: nome,
                password: senha
            });

        response.status(200)
            .send(addNewUser);
    } catch(error) {
        next(error)
    }
}

export {
    cadastroUser,
    login,
}