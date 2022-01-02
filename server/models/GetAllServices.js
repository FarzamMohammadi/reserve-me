import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  ServiceProvider: {
    type: String,
  },
  ServiceName: {
    type: String,
  },
  Description: {
    type: String,
  },
  Category: {
    type: String,
  },
  StartDate: {
    type: Date,
  },
  EndDate: {
    type: Date,
  },
  Availability: {
    type: String,
  },
});

const ServicePostings = mongoose.model("createservices", serviceSchema);

export default ServicePostings;
