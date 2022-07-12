const mongooes = require('mongoose');
const mongoURI = "mongodb://localhost:27017/"

const connectToMongo = ()=>{
    mongooes.connect(mongoURI,()=>{
        console.log("connected to Mongo Sucessfully");
    })
}
module.exports = connectToMongo;
