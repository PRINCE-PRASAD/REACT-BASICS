const mongooes = require("mongoose");
const mongoURI = "paste your mongo uri";
// /datakeep use for new datbase in name of datakeep

const connectToMongo = () => {
  mongooes.connect(mongoURI, () => {
    console.log("connected to Mongo Sucessfully");
  });
};
module.exports = connectToMongo;
