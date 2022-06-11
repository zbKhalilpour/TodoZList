const express=require('express');
const toDoZApp = express();

require('app-module-path').addPath(__dirname);

toDoZApp.set('view engine','ejs');
toDoZApp.use(express.static(__dirname + '/public'));

toDoZApp.use('/',require('./routes/home'));



toDoZApp.listen(5000,()=>{console.log('hello todoz follower')});