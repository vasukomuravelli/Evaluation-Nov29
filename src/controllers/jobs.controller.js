const express = require("express");

const router = express.Router();

const Job =require("../models/job.model");

router.post("",async(req,res)=>{
    try{

        const job = await Job.create(req.body);

        res.status(201).send(job);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

router.get("", async(req,res)=>{
    try{

        const job = await Job.find().populate({path : "Skill_id", select : "Skill_name"}).populate({path : "City_id", select : "City_name"}).lean().exec();

        res.send(job);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.get("/:id", async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id).populate({path : "Skill_id", select : "Skill_name"}).populate({path : "City_id", select : "City_name"}).lean().exec();

        res.send(job);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.patch("/:id", async(req,res)=>{
    try{

        const job = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(job);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.delete("/:id", async(req,res)=>{
    try{

        const job = await Job.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(job);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

module.exports = router;