const { Schema, model } = require("mongoose");

const greenPointSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.Mixed,
      required: true,
    },
    containers: {
      type: [
        {
          name: { type: String, required: true },
          weight: { type: Number, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("greenPoint", greenPointSchema);