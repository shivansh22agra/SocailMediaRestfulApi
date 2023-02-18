import express from 'express';
const app = express();
app.use("/", (req, res, next) => {
  console.log("Hello World");
  
});
app.listen(5000,()=>console.log('shuru hua'));
