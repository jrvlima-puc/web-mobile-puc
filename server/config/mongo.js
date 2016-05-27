var mongoose = require('mongoose');

var config = {
  database: {
    connectionString: "mongodb://heroku_h4ph4p1q:heroku_h4ph4p1q@ds017173.mlab.com:17173/heroku_h4ph4p1q",
    databaseName: "web-mobile"
  },
  debug: {
    database: {
      connectionString: "mongodb://localhost:27017/web-mobile-dev",
      databaseName: "web-mobile-dev"
    }
  }
};

mongoose.connect(config.database.connectionString);
