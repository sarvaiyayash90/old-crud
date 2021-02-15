require('./db');

const express = require('express')
const fileupload = require('express-fileupload')
const bodyparser = require('body-parser')
const cors = require('cors')

const path = require('path');

var studentcontroller = require('./controllers/student.route')

var app = express();

//app.use(express.static(__dirname + './public'));
//app.use(express.static('N:\mahadev\MERN-CRUD\react-mernstack-crud\public\Img'));

app.use(fileupload());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors({origin:'http://localhost:3000'}));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('react-mernstack-crud/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'react-mernstack-crud','build','index.html'));
  });
}

app.listen(process.env.PORT || 4000,()=>console.log('Server Started at port : 4000'));



app.use('/students',studentcontroller);