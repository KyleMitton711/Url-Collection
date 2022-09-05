const PostbackRobustDigital = require("../models/postbackrobustdigital.model.js");

// Create and Save a new row
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a PostbackRobustDigital params
  const params = new PostbackRobustDigital({
    clickid: req.body.clickid,
    revenue: req.body.revenue
  });

  // Save Tutorial in the database
  PostbackRobustDigital.create(params, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};
