const asyncHandler = require("express-async-handler");
const GreenPoint = require("../models/greenPointModel");



// @desc    Fetch Green Point
// @route   GET /api/getPoints
// @access  Public
const getGreenPoints = asyncHandler(async (req, res) => {
  const greenPoints = await GreenPoint.find({}).lean();

  res.status(200).json({
    greenPoints,
  });
});




// @desc    Add Green Point
// @route   POST /api/addPoint
// @access  Public
const addGreenPoints = asyncHandler(async (req, res) => {
  const { name, address, containers } = req.body;

  const greenPoint = await GreenPoint({
    name,
    address,
    containers,
  });

  const createdGreenPoint = await greenPoint.save();

  res.status(201).json({
    createdGreenPoint,
  });
});

module.exports = {
  getGreenPoints,
  addGreenPoints,
};
