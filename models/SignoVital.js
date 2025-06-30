import mongoose from 'mongoose';

const signoVitalSchema = new mongoose.Schema({
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
    frecuencia: Number,
    spo2: Number,
    temperatura: Number,
    fecha: { type: Date, default: Date.now }
});

export default mongoose.model('SignoVital', signoVitalSchema);
