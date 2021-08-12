const asyncHandler = require("express-async-handler");
const UserActivity = require("../models/userActivityModel");



// @desc    Fetch User Activites [ Selected Green Point ]
// @route   GET /api/getUserActivities
// @access  Public
const getUserActivities = asyncHandler(async (req, res) => {
  const userActivities = await UserActivity.find({}).lean();

  res.status(200).json({
    userActivities,
  });
});




// @desc    Add Green Point [ Selected Green Point ]
// @route   POST /api/addUserActivity
// @access  Public
const addUserActivity = asyncHandler(async (req, res) => {
  const { greenPointID, user_name, activity_data } = req.body;

  const userActivity = await UserActivity({
    greenPointID, user_name, activity_data
  });

  const createdUserActivity = await userActivity.save();

  res.status(201).json({
    createdUserActivity,
  });
});

module.exports = {
    getUserActivities,
    addUserActivity
};
