const Plant = require("../models/plant");


exports.getAllPlant = (req, res) => {
  Plant.find()
    .then((plant) => res.json(plant))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Plant not found", error: err.message })
    );
};

exports.postCreatePlant = (req, res) => {
  Plant.create(req.body)
    .then((data) => res.json({ message: "Plant added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to adtd plant", error: err.message })
    );
};

exports.putUpdatePlant = (req, res) => {
  Plant.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update plant", error: err.message })
    );
};

exports.deletePlant = (req, res) => {
  Plant.findByIdAndRemove(req.params.id, req.body)
    .then((data) =>
      res.json({ message: "Plant deleted successfully", data })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Plant not found", error: err.message })
    );
};
