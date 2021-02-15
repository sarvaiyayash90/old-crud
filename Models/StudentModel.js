const mongoose = require('mongoose');

var studentschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    rollno:{
        type:String
    },
    selectedFile:{
        type:String
        // data: Buffer,
        // contentType: String
    }
})

module.exports = mongoose.model('studatas',studentschema);
    
