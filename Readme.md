# 🧬 Biomed API – Monitor de Signos Vitales

API REST construida con **Node.js**, **Express** y **MongoDB** para el monitoreo básico de signos vitales de pacientes. Este proyecto está orientado a estudiantes de **Sistemas Biomédicos** como práctica introductoria al desarrollo de backends con persistencia de datos.

---

## 🧪 Características

- 📋 CRUD de pacientes.
- 📈 Simulación de signos vitales:
  - Frecuencia cardíaca (bpm)
  - Saturación de oxígeno (SpO₂)
  - Temperatura corporal (°C)
- 🗃️ Persistencia de datos con MongoDB.
- 🕒 Historial de signos vitales por paciente.

---

## 🧰 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- CORS
- Nodemon (dev)

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/biomed-api.git
   cd biomed-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/biomed
   ```

4. Inicia el servidor:

   ```bash
   npm run dev
   ```

   El servidor correrá en: `http://localhost:3000`

---

## 📡 Endpoints disponibles

### 📁 Pacientes

- `GET /api/pacientes`  
  Obtiene todos los pacientes.

- `POST /api/pacientes`  
  Crea un nuevo paciente.  
  **Body:**
  ```json
  {
    "nombre": "Ana Flores",
    "edad": 42
  }
  ```

---

### 🧪 Signos vitales

- `GET /api/signos/:pacienteId`  
  Simula, guarda y obtiene signos vitales para un paciente.  
  **Respuesta:**
  ```json
  {
    "mensaje": "Signos vitales simulados y obtenidos exitosamente",
    "signosActuales": {
      "paciente": "id_del_paciente",
      "frecuencia": 75,
      "spo2": 98,
      "temperatura": "36.8",
      "fecha": "2025-06-30T..."
    },
    "historial": [
      // Array con todo el historial de signos del paciente
    ]
  }
  ```

---

## 🗃️ Estructura del proyecto

```
biomed-api/
├── models/          # Modelos Mongoose
├── routes/          # Rutas de la API
├── index.js         # Servidor principal
├── vercel.json      # Configuración de Vercel
├── .env             # Variables de entorno
├── .env.example     # Ejemplo de variables de entorno
├── package.json     # Configuración del proyecto
└── README.md
```

---

## 🚀 Despliegue en Vercel

### Preparación

1. **Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)** (recomendado para producción)
2. **Obtén tu cadena de conexión** desde MongoDB Atlas
3. **Crea una cuenta en [Vercel](https://vercel.com)**

### Pasos para desplegar

1. **Sube tu código a GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/biomed-api.git
   git push -u origin main
   ```

2. **Conecta tu repositorio en Vercel**:

   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración

3. **Configura las variables de entorno en Vercel**:

   - En el dashboard de Vercel, ve a tu proyecto
   - Ve a Settings → Environment Variables
   - Agrega: `MONGO_URI` con tu cadena de conexión de MongoDB Atlas

4. **¡Despliega!** 🎉
   - Vercel desplegará automáticamente tu API
   - Recibirás una URL como: `https://tu-proyecto.vercel.app`

### Variables de entorno requeridas

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/biomed?retryWrites=true&w=majority
```

---

## 🧑‍⚕️ Contexto educativo

Este proyecto simula una aplicación biomédica simple para uso académico. Puede servir como punto de partida para construir sistemas más avanzados, como:

- Alerta automática por valores anómalos.
- Integración con sensores reales vía APIs.
- Dashboards con React o Flutter para visualización.

---

## 🧑‍💻 Autor

Desarrollado por Junior Wachapa – Docente de Ingeniería en Sistemas Biomédicos

---

## 📝 Licencia

MIT License
