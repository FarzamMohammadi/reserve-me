/*
*CreateService.js
*Muksud Hussain Mahi
*ID: 301155894
*November 17, 2021
*/
const mongoose = require('mongoose');
let CreateService = mongoose.Schema(
    {
        ServiceProvider:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Required'
        },
        ServiceName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Required'
        },
        Description:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Required'
        },
        Category:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Required'
        },
        StartDate:
        {
            type: Date,
            default: Date.now,
            required: 'Required'
        },
        EndDate:
        {
            type: Date,
            default: Date.now,
            required: 'Required'
        },
        Availability:
        {
            type: String,
            default: '',
            required: 'Required'
        }
    }
);

module.exports = mongoose.model('CreateService',CreateService);