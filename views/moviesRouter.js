
const express = require('express');

const router = express.Router();

const moviesController = require('../controllers/moviesControllers');

//Endpoints

router.get("/getAll", MoviesController.getAllMovies);
router.post("/newMovie", MoviesController.newMovie);
router.put("/updateMovie", MoviesController.updateMovie);
router.delete("/deleteMovie", MoviesController.deleteMovie);


module.exports = router;



