const express = require("express");

const router = express.Router();

const Skill = require("../models/skill.model");

router.post("",async(req,res)=>{
    try{

        const skill = await Skill.create(req.body);

        res.status(201).send(skill);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

router.get("", async(req,res)=>{
    try{

        const skill = await Skill.find().lean().exec();

        res.send(skill);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.get("/:id", async(req,res)=>{
    try{

        const skill = await Skill.findById(req.params.id).lean().exec();

        res.send(skill);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.patch("/:id", async(req,res)=>{
    try{

        const skill = await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(skill);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.delete("/:id", async(req,res)=>{
    try{

        const skill = await Skill.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(skill);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

module.exports = router;