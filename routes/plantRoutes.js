const express = require('express');
const router = express.Router();
const Plant = require('../models/plant'); // Import modelu MongoDB

// Pobierz wszystkie rośliny
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Pobierz roślinę po ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Roślina nie znaleziona' });
    res.json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Dodaj nową roślinę
router.post('/', async (req, res) => {
  const plant = new Plant(req.body);
  try {
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Zaktualizuj roślinę po ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPlant) return res.status(404).json({ message: 'Roślina nie znaleziona' });
    res.json(updatedPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Usuń roślinę po ID
router.delete('/:id', async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Roślina nie znaleziona' });
    res.json({ message: 'Roślina została usunięta' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
