import express from "express";

const app = express();

// middleware function example
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
  }
  
app.use(myLogger);
//basic routes
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.post('/user',(req,res)=>{
    res.send('Got a post request at /user');
})
app.put('/user',(req,res)=>{
    res.send('Got a put request at /user');
})
app.delete('/user',(req,res)=>{
    res.send('Got a delete request at /user');
})
app.listen(8080,()=>{
    console.log("server started");
})