const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [{type: String}],
    image: {
        type: String,
        default: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg' ,
    },
    description:String,
    showtimes: [{type: String}]
});

const movieModel = mongoose.model("movies", movieSchema);
module.exports = movieModel;