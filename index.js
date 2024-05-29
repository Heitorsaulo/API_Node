const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Aluno = require('./models/aluno.model.js');

dotenv.config()

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API");
})
app.post('/api/aluno', async (req, res) => {
    try {
        const aluno = await Aluno.create(req.body);
        res.status(200).json(aluno)
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
