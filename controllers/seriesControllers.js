const serie = require('../models/serie');
const mongoose = require('mongoose')
const seriesController = {};

seriesControllers.getAllSeries = async (req, res) => {
    try {
        let allSeries = await sovie.find({});
        if (allSeries.length > 0) {
            res.send(allSeries)
        } else {
            res.send({ "Message": "Serie no encontrada" })
        }
    } catch (error) {
        console.log(error);
    }
};
















module.exports = seriesControllers;























