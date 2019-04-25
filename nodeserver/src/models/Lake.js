// External Dependancies
const mongoose = require("mongoose");

const lakeSchemas = new mongoose.Schema({
  _id: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

module.exports = mongoose.model("Lake", lakeSchemas);
