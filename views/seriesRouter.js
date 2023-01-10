

const express = require('express');
const router = express.Router();
const seriesControllers = require('../controllers/seriesControllers');

//Endpoints
router.get("/getAll", seriesControllers.getAllSeries);
router.post("/newSerie", seriesControllers.newSerie);
router.put("/updateSerie", seriesControllers.updateSerie);
router.delete("/deleteSerie", seriesControllers.deleteSerie);
router.post("/rating", seriesControllers.postSeriesByRating);
router.post("/id", seriesControllers.postSeriesById);
router.post("/tittle", seriesControllers.postSeriesByTittle);
router.post("/genre", seriesControllers.postSeriesByGenre);



module.exports = router;