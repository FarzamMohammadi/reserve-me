let express = require("express");
let mongoose = require("mongoose");
let BookService = require("../models/BookService");
let CreateService = require("../models/CreateService");
let bodyParser = require("body-parser");

module.exports.bookService = (req, res, next) => {
  let newBookService = new BookService({
    ServiceProvider: req.body.ServiceProvider,
    ServiceName: req.body.ServiceName,
    DateTime: req.body.DateTime,
    ServiceSeeker: req.body.ServiceSeeker,
  });

  newBookService
    .save()
    .then(() => res.json("Service Booked"))
    .catch((err) => res.status(400).json("Error: " + err));
};
module.exports.getServices = async (req, res) => {
  CreateService.find()
    .then((result) => {
      res.send(result.length > 0 ? result : "No Postings Found");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getServices = async (req, res) => {
  CreateService.find()
    .then((result) => {
      res.send(result.length > 0 ? result : "No Postings Found");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.addService = (req, res, next) => {
  let newCreateService = CreateService({
    ServiceProvider: req.body.serviceProvider,
    ServiceName: req.body.serviceName,
    Description: req.body.description,
    Category: req.body.category,
    StartDate: req.body.startDate,
    EndDate: req.body.endDate,
    Availability: req.body.availability,
  });

  newCreateService
    .save()
    .then(() => res.json("Service Added"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.updateService = (req, res, next) => {
  CreateService.findById(req.params.id)
    .then((service) => {
      service.ServiceProvider = req.body.serviceProvider;
      service.ServiceName = req.body.serviceName;
      service.Description = req.body.description;
      service.Category = req.body.category;
      service.StartDate = req.body.startDate;
      service.EndDate = req.body.endDate;
      service.Availability = req.body.availability;

      service
        .save()
        .then(() => res.json("Service updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.getServices = async (req, res, next) => {
  const services = await CreateService.find().exec();
  res.json(services);
};

module.exports.getBookings = async (req, res, next) => {
  const bookings = await BookService.find().exec();
  res.json(bookings);
};
