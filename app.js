const express = require("express"); 

const app = express(); 

app.use(express.json()); 


app.get("/", (req, res)=>{
    res.status(200).json({
        msg:"Docker/ Jenkins app working fine."
    }); 
}); 

const PORT = 5000; 

app.listen(PORT, ()=>console.log(`App listening to Port ${PORT}.`)); 