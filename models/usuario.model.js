const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema(
    {
        cpf: {
            type: Number,
            require: [true, "informe o cpf do usuario"]
        },

        nome: {
            type: String,
            require: [true, "informe o nome do usuario"]
        },

        data_nascimento: {
            type: Date, 
            require: [true, "informe a data de nascimento do usuario"]
        },

    }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;