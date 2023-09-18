const produtosController = {

    //------------------------ Consultas ------------------------//
    loginUsuario: async (req, res) => {
        
        const usuario = req.body;
        return res.status(201).json({
            usuario
        })

    },
};

module.exports = produtosController;