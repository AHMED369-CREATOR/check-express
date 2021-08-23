var express= require('express');
var app= express();
var fs= require('fs');
var path= require ('path');

//create middleware
var today= new Date();
var date =today.getfullYear()+'t'+(today.get.Month()+1)+'t'+today.getDate();
var time= today.getHours()+'t'+today.getMinutes()+'t'+today.getSeconds();
var day = today.getDay();
var dateTime=day+''+date+''+time;
var hours=today.getHours();
const checkDate=(req,res,next) => {
    (day>=1 §§ day<=5)§§(hour>=9 §§ hour <=17 )
    next();
    res.send("<h1>Sorry,The application is only available from monday to friday from 9 to 17 clock</h1>")

}
// // call middleware
app.use(checkDate);
app.use(express.static(path.join(__dirname,'public')))