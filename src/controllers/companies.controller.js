const express = require("express");

const router = express.Router();

const Company = require("../models/comapny.model");

router.post("",async(req,res)=>{
    try{

        const company = await Company.create(req.body);

        res.status(201).send(company);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

router.get("", async(req,res)=>{
    try{

        const company = await Company.find().populate({path:"Job",populate : {path : "Skill_id", select : "Skill_name"},populate : {path : "City_id", select : "City_name"},selct : "Company_Name"}).lean().exec();

        res.send(company);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.get("/:id", async(req,res)=>{
    try{

        const company = await Company.findById(req.params.id).populate({path:"Job",populate : {path : "Skill_id", select : "Skill_name"},populate : {path : "City_id", select : "City_name"},selct : "Company_Name"}).lean().exec();

        res.send(company);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.patch("/:id", async(req,res)=>{
    try{

        const company = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(company);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.delete("/:id", async(req,res)=>{
    try{

        const company = await Company.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(company);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

module.exports = router;