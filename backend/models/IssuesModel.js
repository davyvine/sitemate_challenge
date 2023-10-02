const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IssueSchema = new Schema(
   {
      title: String,
      description: String,
   },
   { timestamps: true, versionKey: false },
);

module.exports.IssuesModel = mongoose.model("Issues", IssueSchema);
