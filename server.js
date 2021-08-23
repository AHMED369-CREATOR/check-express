 const express = require('express')
 const app = express ()
 const members=require("./members")
 const fs = require ("fs")
//  //middlewares
//  const message=(req,res,next)=> {
//      console.log('hello')
//      next()
 }
//  app.get('/about',(req,res)=>(
//   // res.send('hello world')
//  res.send('<h1>Hello world</h1>')
// //  ))
// app.get ('/about', (req,res)=>{
//     res.send('<h1>this  a express workshop</h1>')
// })
// app.get ('/members',message,(req,res)=>{
//     res.send(members)
// })
app.get('/',(rq,res)=>{
    fs.readFile('./index.html','utf-8'), (err,data)=>{
    err ? console.log (err) : res.send(data)

}}
const PORT = process.env.PORT /5000;
const server=app.listen(PORT,(err)=>err ? console.log (err) : console.log ('server running on port $'(PORT)))