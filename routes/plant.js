const express = require("express");

const router = express.Router();

const {
  getAllPlant,
  postCreatePlant,
  putUpdatePlant,
  deletePlant,
} = require("../controllers/plant");



router.get("/", getAllPlant);


router.post("/",postCreatePlant);


router.put("/:id", putUpdatePlant);


router.delete("/:id", deletePlant);

module.exports = router;
