

const express = require('express');

const router = express.Router();

const seriesController = require('../controllers/seriesControllers');

//Endpoints
router.get("/getAll", SeriesController.getAllSeries);
router.post("/newSerie", SeriesController.newSerie);
router.put("/updateSerie", SeriesController.updateSerie);
router.delete("/deleteSerie", SeriesController.deleteSerie);


module.exports = router;