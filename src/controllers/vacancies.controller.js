const express = require("express");

const router = express.Router();

const Company = require("../models/comapny.model");


router.get("", async(req,res)=>{
    try{
        
        const company = await Company.find().sort({"Job.length" : -1}).limit(1).populate({path:"Job",populate : {path : "Skill_id", select : "Skill_name"},populate : {path : "City_id", select : "City_name"},selct : "Company_Name"}).lean().exec();
    
        res.send(company);

    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

module.exports = router;