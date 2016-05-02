var mongoose = require('mongoose');


var config = {
  database: {
    connectionString: "mongodb://localhost:27017/web-mobile",
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
