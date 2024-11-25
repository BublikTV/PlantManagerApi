const express = require('express');
const mongoose = require('mongoose');
const plantRoutes = require('./routes/plantRoutes');

const app = express();

// Middleware
app.use(express.json());

// Połączenie z MongoDB
mongoose.connect('mongodb://localhost:27017/PlantManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Trasy
app.use('/plants', plantRoutes);

// Uruchom serwer
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Zezwala na żądania z dowolnej domeny
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Zezwala na metody HTTP
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Zezwala na określone nagłówki
  next();
});

