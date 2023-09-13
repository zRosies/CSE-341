const gustavoRoute = (req,res)=>{
    res.send("Gustavo Luz")
}

const testRoute = (req,res)=>{
    res.send("The test works")
}


module.exports={
    gustavoRoute,
    testRoute   
}