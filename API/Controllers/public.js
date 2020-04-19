const fetch_node = require('node-fetch');
module.exports.getAllStatistics = async (req, res) => {
let result_response;
await fetch_node('https://api.covid19api.com/summary').then(async (result) =>result_response= await result.json());
res.json(result_response);              
};
module.exports.getUkraineStatistics=async(req,res)=>{
    let result_response;
    await fetch_node('https://covid19.mathdro.id/api/countries/UA').then(async(result)=>result_response=await result.json());
    res.json(result_response);
}
module.exports.

