const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId, ref: 'id',
        required: true  
    },
    tittle: {
        type: String,
        required: true
    },
    year : {
        type: Number,   
    },
    genre:{
        type: String
    },
    rating : {
        type: Number,  
    },
   

});

const serie = mongoose.model("serie", seriesSchema);
module.exports = serie;


   