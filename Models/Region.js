const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const RegionSchema=new Schema({
    region:String,
    count:String

})
module.exports=mongoose.model('regions',RegionSchema);