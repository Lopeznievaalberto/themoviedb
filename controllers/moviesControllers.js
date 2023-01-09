const movie = require('../models/movie');
const mongoose = require('mongoose');
const moviesControllers = {};

moviesControllers.getAllMovies = async (req, res) => {
    try {
        let allMovies = await movie.find({});
        if (allMovies.length > 0) {
            res.send(allMovies)
        } else {
            res.send({ "Message": "Película no encontrada" })
        }
    } catch (error) {
        console.log(error);
    }
};

moviesControllers.newMovie = async (req, res) => {
    let id=req.body.id;
    let tittle=req.body.tittle;
    let year =req.body.year;
    let genre=req.body.genre;
    let rating =req.body.rating;

    try {
        let result = await movie.create({id:id , tittle: tittle, year:year, genre:genre, rating:rating})
        if(result?.tittle){
            res.send({"Message": `La película ${result.tittle} se ha añadido con éxito`})
        }
    } catch (error) {
        console.log(error)
    }
        
};















module.exports = moviesControllers;
