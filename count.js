const data = require('./data');
const ObjectsToCsv = require('objects-to-csv');
const randomstring = require('randomstring');

var all = [];

for(x in data) {
    // count += data[x][].length;.
    var l = data[x][0]
    all.push(l);
}

var count = 0;

var dominion = [];

all.forEach(k=>{
    const arr = k.split(",");
    arr.forEach((k,i)=>{
        var obj = {};
        var code = randomstring.generate({
            length: 6,
            charset: 'numeric'
          });
        obj.Name = `dom - SoundTV ${code}${i}`
        obj.Phone = k
        dominion.push(obj);
    })
    var t = k.split(",").length;
    count += t;
})


// new ObjectsToCsv(dominion).toDisk('./contacts/20 dom.csv', { allColumns: true });

console.log(dominion);

console.log(count, 'contacts processed...');
