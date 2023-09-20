const mongodb = require("../db/connection");

const getData = async (req, res, next)=>{

    const result= await mongodb.getDb().db().collection("test").find().toArray();

    try{
        if(result.length === 0){
            res.status(404).json({message : "no data found"})
        }
        else{
            res.setHeader("Content-Type","application/json");
            res.status(200).json(result[1])
        }
    }
    
    catch(error){
        console.log("Error querying the database:" , error);
        res.status(500).json({message: "internal server error"});

    }
}

module.exports={
    getData
}