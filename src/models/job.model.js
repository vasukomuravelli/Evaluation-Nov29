const mongoose = require("mongoose");

const Skill = require("./skill.model");

const City = require("./city.model");

const JobSchema = new mongoose.Schema({
    "Skill_id" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Skill,
        required:true,
    },
    "City_id" : {
        type:mongoose.Schema.Types.ObjectId,
        ref: City,
        required:true,
    },
    "WFH"  : {type:String,required:true},
    "NoticeDuration" : {type:Number,required:true},
    "Rating" : {type:Number,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new mongoose.model("job",JobSchema);