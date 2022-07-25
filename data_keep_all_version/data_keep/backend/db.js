const mongooes = require('mongoose');
const mongoURI = "mongodb://localhost:27017/"
// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = ()=>{
    mongooes.connect(mongoURI, ()=>{
        console.log("connected to Mongo Sucessfully");
    })
}
module.exports = connectToMongo;
