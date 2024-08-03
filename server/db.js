const mongoose = require("mongoose");

//PLEASE EDIT YOUR MONGO DB CONNECTION HERE
/*YOU CAN FIND SAMPLE COLLECTION at mongodb_collections folder */
var mongoURL = "mongodb+srv://nguyenhanfs:DDIMXlk11IhzKP12@cluster0.nwsp2mh.mongodb.net/booking?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
