const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); 
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

// Connessione al database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // Usa il percorso corretto

// Middleware di gestione errori
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});