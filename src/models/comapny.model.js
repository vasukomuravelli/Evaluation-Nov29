const mongoose = require("mongoose");

const Job = require("./job.model");

const CompanySchema = new mongoose.Schema({
    "Company_Name" : {type:String,required:true},
    "Job" : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: Job,
        required:true,
    }],
},{
    versionKey:false,
    timestamps:true,
})

module.exports = new mongoose.model("company",CompanySchema);