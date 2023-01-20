fetch("http://localhost:5000").then(response=>{
    console.log({
        status:response.status
    }); 
    return {
        status:response.status
    }; 
}).catch(err=>console.log(err)); 