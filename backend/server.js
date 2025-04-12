const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/tasks', require('./routes/tasks'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hello world from express!');
});

// Arranque
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
