var mongoose = require('mongoose');
var FilmSchema= mongoose.Schema({
    titre: String,
    popularite: Number,
    genres:[String],
    votes:[String],
    image: String,
    date_sortie: Date

})

var FilmSchema= new mongoose.model('Films',FilmSchema)
module.exports= FilmSchema