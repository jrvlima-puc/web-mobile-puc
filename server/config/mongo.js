var mongoose = require('mongoose');

var config = {
  database: {
    connectionString: "mongodb://heroku_n6fv3s42:8sukkb1cu2p7g001l4vbmkv80u@ds017553.mlab.com:17553/heroku_n6fv3s42",
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
