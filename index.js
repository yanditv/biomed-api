import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import pacientesRoutes from './routes/pacientes.js';
import signosRoutes from './routes/signos.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        message: '🧬 Biomed API - Monitor de Signos Vitales',
        version: '1.0.0',
        endpoints: {
            pacientes: '/api/pacientes',
            signos: '/api/signos/:pacienteId'
        }
    });
});

// Rutas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/signos', signosRoutes);

// Conexión a MongoDB
let cachedConnection = null;

async function connectToDatabase() {
    if (cachedConnection) {
        return cachedConnection;
    }

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        cachedConnection = connection;
        console.log('✅ Conectado a MongoDB');
        return connection;
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
        throw error;
    }
}

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
    connectToDatabase().then(() => {
        app.listen(PORT, () => console.log(`🚀 API corriendo en http://localhost:${PORT}`));
    });
}

// Para Vercel (serverless)
export default async function handler(req, res) {
    await connectToDatabase();
    return app(req, res);
}
