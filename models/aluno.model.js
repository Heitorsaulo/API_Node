const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: [true, "informe o nome do aluno"]
        },

        matricula: {
            type: String,
            require: [true, "informe a matricula do aluno"]
        },

        curso: {
            type: String, 
            require: [true, "informe o curso do alunio"]
        },

        ativo: {
            type: Boolean,
            require: [true, "Esse aluno está ativo na universidade"]
        }
    }
);

const Aluno = mongoose.model("Aluno", AlunoSchema);

module.exports = Aluno;