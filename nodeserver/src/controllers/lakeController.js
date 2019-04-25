// External Dependancies
const boom = require("boom");

// Get Data Models
const Lake = require("../models/Lake");

// Get lakes by position
exports.getLakes = async (req, reply) => {
  try {
    const lakes = await Lake.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [
              parseFloat(req.params.lng),
              parseFloat(req.params.lat)
            ]
          },
          $maxDistance: 9999
        }
      }
    });

    return lakes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single lake by ID
exports.getSingleLake = async (req, reply) => {
  try {
    const id = req.params.id;
    const lake = await Lake.findById(id);
    return lake;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new lake
exports.addLake = async (req, reply) => {
  try {
    const lake = new Lake(req.body);
    return lake.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};
