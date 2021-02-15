const mongoose  = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://yash:yash8238@cluster-yash.fcyru.mongodb.net/stuDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false},(err)=>{
    if(!err) {console.log('Database sucessfully connected!');}
    else{ console.log('Could not connect to database :'+err); }
});

// module.exports = {
//     db: 'mongodb://localhost:27017/stuDB'
// };
