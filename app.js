const wbm = require('wbm');
const {official_zikhall} = require('./data');

const new_data = [];

const nums = official_zikhall[0].split(",");

nums.forEach((item,index)=>{    
    new_data.push(item)
})

wbm.start().then(async () => {
    const phones = new_data;
    const message = 'What\'s up? This is *SoundTV*. We are your best plug to *new music*🎧. We give out updates for new *music*🎶 & their videos. There\'s also gonna be giveaways every week and referral contests. So save our number as *SoundTV* and get plugged in NOW. Don\'t forgot to share😚: https://wa.me/2347030596600';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));