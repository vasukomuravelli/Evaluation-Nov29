const express = require("express");

const router = express.Router();

const City = require("../models/city.model");

router.post("",async(req,res)=>{
    try{

        const city = await City.create(req.body);

        res.status(201).send(city);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }
});

router.get("", async(req,res)=>{
    try{

        const city = await City.find().lean().exec();

        res.send(city);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.get("/:id", async(req,res)=>{
    try{

        const city = await City.findById(req.params.id).lean().exec();

        res.send(city);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.patch("/:id", async(req,res)=>{
    try{

        const city = await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        res.status(201).send(city);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

router.delete("/:id", async(req,res)=>{
    try{

        const city = await City.findByIdAndDelete(req.params.id).lean().exec();

        res.status(204).send(city);
    }catch(e){

        res.status(500).send({"Message":e.message,"Status":"Failed"});

    }

});

module.exports = router;
