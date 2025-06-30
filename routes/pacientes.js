import express from 'express';
import Paciente from '../models/Paciente.js';

const router = express.Router();

// GET todos los pacientes
router.get('/', async (req, res) => {
    const pacientes = await Paciente.find();
    res.json(pacientes);
});

// POST nuevo paciente
router.post('/', async (req, res) => {
    const { nombre, edad } = req.body;
    const paciente = new Paciente({ nombre, edad });
    await paciente.save();
    res.status(201).json(paciente);
});

export default router;
