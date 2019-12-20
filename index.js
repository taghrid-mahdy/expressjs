const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`application is up on ${PORT}`));

app.use(bodyParser.json());

app.use((req,res,next)=>{
  let number = req.body.number;
  res.locals.number = number + 1
  next();
});

app.use((req,res,next)=>{
  res.locals.number = res.locals.number + 1;
  next();
});

app.use((req,res,next)=>{
  res.locals.number = res.locals.number + 1;
  next();
});

app.post('/', (req,res,next) => {
    let first = req.body.firstName;
    let second = req.body.secondName;
    let message = "Welcome " + first + " " + second;

    res.json({
      message : message
    })
});

app.use('*',(req,res,next) => {
    res.status(404).json({
      message : "the requested API is not found"
    })
});

app.use((err,req,res,next) => {
    res.json ({
      error : err
    })
});