const mongoose = require('mongoose');

const NotesSchema = new Schema({
title:{
    type: String,
    require: true
},
description:{
    type: String,
    require: true,
},  
tag:{
    type: String,
   default: "Genearl"
},
date:{
    type: String,
   default: Date.now
},
  });
  module.exports = mongoose.model('notes', UserSchema);