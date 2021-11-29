const express = require("express");

const router = express.Router();

const Job =require("../models/job.model");


router.get("", async(req,res)=>{
    try{
        
        const jobs = await Job.find({"NoticeDuration" : 2}).populate({path : "Skill_id",select : "Skill_name"}).populate({path : "City_id",select : "City_name"}).lean().exec();
    
        res.send(jobs);

    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

module.exports = router;