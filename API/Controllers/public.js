const fetch_node = require('node-fetch');

const {
    getArrayRegion,
    updateInfoForUkraine
} = require('../getRegionInfo');
module.exports.getAllStatistics = async (req, res, ) => {
    let result_response;
    await fetch_node('https://api.covid19api.com/summary').then(async (result) => result_response = await result.json());
    res.json(result_response);
};
module.exports.getUkraineStatistics = async (req, res) => {
    let result_response;
    await fetch_node('https://covid19.mathdro.id/api/countries/UA').then(async (result) => result_response = await result.json());
    res.json(result_response);


};
module.exports.getRegionStatistics = async (req, res) => {
    console.log(req);
    const result = await getArrayRegion(req, res, {});
    res.json(result);

}
module.exports.updateStatistics = async (req, res) => {
    await updateInfoForUkraine();
    res.status(200).json('sadsda');

}