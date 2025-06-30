import express from 'express';
import SignoVital from '../models/SignoVital.js';
import Paciente from '../models/Paciente.js';

const router = express.Router();

// GET: Simula y obtiene signos vitales para un paciente
router.get('/:pacienteId', async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.pacienteId);
        if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });

        // Generar nuevos signos vitales simulados
        const signosSimulados = new SignoVital({
            paciente: paciente._id,
            frecuencia: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
            spo2: Math.floor(Math.random() * (100 - 95 + 1)) + 95,
            temperatura: (Math.random() * (37.5 - 36) + 36).toFixed(1)
        });

        // Guardar los signos simulados
        await signosSimulados.save();

        // Obtener todo el historial de signos del paciente (incluyendo el recién creado)
        const historial = await SignoVital.find({ paciente: req.params.pacienteId }).sort({ fecha: -1 });

        res.json({
            mensaje: 'Signos vitales simulados y obtenidos exitosamente',
            signosActuales: signosSimulados,
            historial: historial
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar signos vitales: ' + error.message });
    }
});

export default router;
