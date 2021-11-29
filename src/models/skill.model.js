const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    "Skill_name" : {type:String,required:true},
},{
versionKey:false,
timestamps:true,
});

module.exports = new mongoose.model("skill",SkillSchema);