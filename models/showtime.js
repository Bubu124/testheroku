var mongoose = require('mongoose')

var ShowtimeSchema = mongoose.Schema({
    date:{
        type : String,
        required : true
    },
    timeStart:{
        type: String,
        required : true
    },
    timeEnd:{
        type: String,
        required : true
    },
    idFilm:{
        type: String,
        required : true
    },
})

var Showtime = module.exports = mongoose.model('showtimes',ShowtimeSchema);