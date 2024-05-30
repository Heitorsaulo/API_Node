const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Usuario = require('./models/usuario.model.js');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API");
})

app.get('/api/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/usuario', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

const mongoDBPassword = process.env.MONGODB_PASSWORD;
const mongoDBURL = `mongodb+srv://admin:${mongoDBPassword}@backendufs.zurrsbf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndUFS`;

mongoose.connect(mongoDBURL).then(() => {
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
    console.log("connected");
}).catch(() => {console.log("connection failed")});
