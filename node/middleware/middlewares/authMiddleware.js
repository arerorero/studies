// app/middleware/authMiddleware.js
const bcrypt = require('bcrypt');

const authMiddleware = async(req, res, next) => {
    const { username, password } = req.body;

    const usernameTeste = "ze";
    const passwordTeste = "damanga";

    async function hashPassword(password) {
        return new Promise((resolve,reject) => {
            bcrypt.hash(password,10,(err,hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            })
        })
    }

    async function main() {

        var passwordTesteHash = hashPassword(passwordTeste)
    // if (!username || !password) {
    //     return res.status(400).json({ message: 'Username e password são obrisexgatórios.' });
    // }
        bcrypt.compare(passwordTeste, passwordTesteHash, (err, isMatch) => {
            if (err) {
                console.log(passwordTeste);
                console.log(passwordTesteHash);
                console.error('Erro ao comparar senhas:', err);
                return res.status(500).json({ message: 'Erro interno do servidor.' });
            }

            if (!isMatch) {
                return next(new Error(res.status(401).json({ message: 'Senha incorreta.' })));
            }

            // Se as credenciais estiverem corretas, você pode adicionar informações ao objeto `req` para uso posterior.

            // Chame next() para continuar com o próximo middleware ou rota.
            next();
        });


    }

    main();



};

module.exports = authMiddleware;
