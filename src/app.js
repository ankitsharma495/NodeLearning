const express = require('express');
const app = express();
// app.use("/hi",(req,res)=>{
//     res.send("hello brother1"); //order matters a lot in routing , here /hi will be matched first and after that /hi/1 will be matched
// })
// app.use("/hi/1",(req,res)=>{
//     res.send("hello brother2");// here /hi/1 will be matched first and after that /hi will be matched but still result will be same as previous response , because of the order of routing
// })
// app.use("/hello",(req,res)=>{
//     res.send("hello brother3");
// })

app.get("/hi",(req,res)=>{
    res.send("hello brother1"); //to get the response from this route we need to use get method
})

app.post("/hi/1",(req,res)=>{
    res.send("hello brother2");// to send the response from this route we need to use post method
}
)

app.use("/",(req,res)=>{
    res.send("hello brother4");// this will be the default route if no other route is matched
})
app.listen(5000,()=>{
    console.log("listening");
})