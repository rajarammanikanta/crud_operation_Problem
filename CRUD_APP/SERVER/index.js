import express from 'express'
import usersRoutes from './routes/users.js'
import bodyParser from 'body-parser'
import cors from 'cors' 


const app=express(); 
const port=4000; 


app.use(bodyParser.json());

app.use(cors()); 
app.use("/",usersRoutes);
app.get("/",(req,res)=>res.send("Hello I am Express"));
app.all("*",(req,res)=>res.send("That Route doesn't exist"));

app.listen(port,()=>{
    console.log("Sever is Listening port")
}); 

