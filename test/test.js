fetch("http://localhost:5000").then(d=>{
    console.log({
        status:d.status
    }); 
    return {
        status:d.status
    }; 
}).catch(err=>console.log(err)); 