const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
});

const Plant = mongoose.model("plant", PlantSchema);

module.exports = Plant;
