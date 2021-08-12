const { Schema } = require("mongoose");

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

module.exports = mongoose.model("greenPoint", greenPointSchema);