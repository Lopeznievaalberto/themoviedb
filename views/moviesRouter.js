
const express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers');

//Endpoints

router.get("/getAll", moviesControllers.getAllMovies);
router.post("/newMovie", moviesControllers.newMovie);
router.put("/updateMovie", moviesControllers.updateMovie);
router.delete("/deleteMovie", moviesControllers.deleteMovie);


module.exports = router;



