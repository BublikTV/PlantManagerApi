const mongoose = require('mongoose');

// Definicja schematu dla roślin
const plantSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nazwa rośliny
  species: { type: String, required: true }, // Gatunek
  description: { type: String, required: false }, // Opis
  wateringSchedule: { type: Number, required: true }, // Harmonogram podlewania (w dniach)
  fertilizationSchedule: { type: Number, required: true } // Harmonogram nawożenia (w dniach)
});

// Eksport modelu jako 'Plant'
module.exports = mongoose.model('Plant', plantSchema);
