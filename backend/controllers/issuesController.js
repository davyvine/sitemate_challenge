const { IssuesModel } = require("../models/IssuesModel");

// CREATE
module.exports.postIssueHandler = async (req, res) => {
   console.log(req);
   let response = await IssuesModel.create({ title: req.body.title, description: req.body.description });
   res.status(201).json(response).end();
};

// GET ALL
module.exports.getAllIssuesHandler = async (req, res) => {
   let response = await IssuesModel.find({});
   res.status(200).json(response).end();
};

// DELETE
module.exports.deleteIssueHandler = async (req, res) => {
   const issueId = req.params.id;
   let response = await IssuesModel.findOneAndDelete({ _id: issueId });
   res.status(200).json(response);
};

// PATCH
module.exports.updateIssueHandler = async (req, res) => {
   const issueId = req.params.id;

   let response = await IssuesModel.updateOne({ _id: issueId }, { $set: { ...req.body } });

   res.status(200).json(response);
};
