const express = require('express');
const { findById } = require('../models/Movie.model');
const movieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

router.get("/movies", function(req, res, next) {
    movieModel.find()
    .then((dbResult) => {
        res.render("movies.hbs", {movies : dbResult});
    })
    .catch(next);
});

router.get("/movies/:id", function (req, res, next) {
    console.log(req.params.id);

    movieModel.findById(req.params.id)
    .then ((dbResult) => {
        res.render("movie.hbs", {movie: dbResult});
    })
    .catch(next);
});

module.exports = router;
