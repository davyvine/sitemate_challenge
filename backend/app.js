const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const issuesController = require("./controllers/issuesController");

const app = express();

app.use(express.json({ limit: "200mb" }));

// CORS OPTION
const CORS_OPTION = {
   credentials: true,
   origin: ["http://localhost:5003", "http://127.0.0.1:5003"],
   optionsSuccessStatus: 200,
};

// DEFINE ROUTES
app.route("/issues").get(issuesController.getAllIssuesHandler).post(issuesController.postIssueHandler);
app.route("/issues/:id").patch(issuesController.updateIssueHandler).post(issuesController.postIssueHandler);

app.use(cors(CORS_OPTION));

// SERVER
let httpServer = http.createServer(app);

// START SERVER !!
let port = 5003;
httpServer.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

// DB
mongoose.connect(`mongodb://localhost:27017`).then(() => console.log("DB connected"));
