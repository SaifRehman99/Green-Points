const { Schema, model } = require("mongoose");

const userActivitySchema = new Schema(
  {
    greenPointID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'greenPoint'
    },
    user_name: {
      type: String,
      required: true,
    },
    // Count of bottles, cans, and sheets added by the user to the selected green point
    // In future if data increase, this structure will help
    activity_data : {
        type: Schema.Types.Mixed,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("userActivity", userActivitySchema);