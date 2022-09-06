module.exports = app => {
  const postbackrobustdigital = require("../controllers/postbackrobustdigital.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/postbackrobustdigital/", postbackrobustdigital.create);

  app.use('/api', router);
  app.use('/healthy', (req, res) => { res.send('ok') });
};
