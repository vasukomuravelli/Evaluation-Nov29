const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    "City_name" : {type:String,required:true},
},{
versionKey:false,
timestamps:true,
});

module.exports = new mongoose.model("city",CitySchema);