const express = require('express');
const app = express();

app.use((req,res)=>{
    res.send("hello brother");
})
app.listen(5000,()=>{
    console.log("listening");
})