const ObjectsToCsv = require('objects-to-csv');
const { extra } = require('./data');
const randomstring = require('randomstring');
var new_data = [];


const nums = extra[0].split(",");

nums.forEach((item,index)=>{

    var set = {Name:null,Phone:null};    

    var code = randomstring.generate({
        length: 6,
        charset: 'numeric'
      });

   set.Name = `extra - SoundTV ${code}${index}`
   set.Phone = item
    
    new_data.push(set)
})

console.log(new_data.length, 'contacts processed')


new ObjectsToCsv(new_data).toDisk('./contacts/21 extra.csv', { allColumns: true });