const needle = require('needle');
const cheerio = require('cheerio');
const fetch=require('node-fetch');
const mongoose=require('mongoose');
const Region=require('../Models/Region');
const url = 'https://moz.gov.ua/article/news/operativna-informacija-pro-poshirennja-koronavirusnoi-infekcii-2019-ncov-';

module.exports.getArrayRegion=async (req,res)=>{
    
const all_regions= await Region.find();
console.log(all_regions);
   return all_regions;
   
  

   
    

}
module.exports.updateInfoForUkraine=async ()=>{

    await Region.db.dropCollection('regions');
    await  needle.get(url, function (err,ress) {
        if(err) throw  err;
        let $ = cheerio.load(ress.body);
        let result = $(".editor ").text();
        let res1 = result.split(':')[2].split('Дані')[0];
        let last = obj(res1);
        console.log(last)
        let counter=0;
        last.forEach(async s=>{
            const {
                region,
                count

            }=s
            
             let obj=new Region({
                 region,
                 count

             })
             console.log(obj+":"+counter++)
             try {
                 obj.save()
                 
             } catch (error) {
               
                 
             }
         

        })
        
    });



}
function obj(array) {
    let masObj =[];
    let arr = array.split(';');
    for(let i=0;i<arr.length;i++){
        masObj.push(returnObj(arr[i]));
    }
    return masObj;
}

function returnObj(str) {
    return {region:str.split('—')[0].trim(),count:str.split('—')[1].trim()};
}




