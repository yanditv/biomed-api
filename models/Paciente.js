import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('Paciente', pacienteSchema);
