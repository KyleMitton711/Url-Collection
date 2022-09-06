const sql = require("./db.js");

// constructor
const PostbackRobustDigital = function(url) {
  this.clickid = url.clickid;
  this.revenue = url.revenue;
  this.timestamp = new Date();
};

PostbackRobustDigital.create = (newParams, result) => {
  sql.query("INSERT INTO postbackrobustdigital SET ?", newParams, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created postbackrobustdigital: ", { id: res.insertId, ...newParams });
    result(null, { id: res.insertId, ...newParams });
  });
};

module.exports = PostbackRobustDigital;
