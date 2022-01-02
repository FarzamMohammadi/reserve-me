let express = require('express');
let mongoose = require('mongoose');
let Review = require('../models/Review');

module.exports.review = (req, res,next) => 
{
    let newReview = Review({
        'serviceProviderId': req.body.serviceProviderId,
        'userId': req.body.userId,
        'comment': req.body.comment
    });

    newReview.save().then(()=>res.json('Review Added!')).catch(err=>res.status(400).json('Error: '+err));
}

module.exports.showReview = (req, res, next) =>
{
    let id = req.params.id;

    Review.find({serviceProviderId:id})
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));
}