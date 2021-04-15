const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('adzan');

if (Config.WORKTYPE == 'private') {

        Asena.addCommand({pattern: 'adzan ?(.*)', desc: Lang.ADZAN_DESC, fromMe: true}, async (message, match) => {

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `https://api.pray.zone/v2/times/today.json?city=${match[1]}`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 500) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n' +
                    '*Waktu :* ```' + json.date.gregorian + '```\n\n' +
		    '*- Imsak:* ```' + json.times.Imsak + '```\n' + 
		    '*- Subuh:* ```' + json.times.Fajr + '```\n' +
		    '*- Dzuhur:* ```' + json.times.Dhuhr + '```\n' + 
		    '*- Ashar:* ```' + json.times.Asr + '```\n' + 
                    '*- Maghrib:* ```' + json.times.Maghrib + '```\n' + 
		    '*- Isya:* ```' + json.times.Isha + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
}

if (Config.WORKTYPE == 'public') {
  
  Asena.addCommand({ pattern: 'adzan ?(.*)', fromMe: true, desc: Lang.ADZAN_DESC }, async (message, match) => {

        const Daerah = match[1]

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${Daerah}`)
          .then(async (response) => {
            const {
              Imsyak,
              Subuh,
              Dhuha,
              Dzuhur,
              Ashar,
              Maghrib,
              Isya,
            } = response.data

            const msg = `📍 *Lokasi:* ${Daerah}

*Imsak:* ${Imsyak}
*Subuh:* ${Subuh}
*Dhuha:* ${Dhuha}
*Dzuhur:* ${Dzuhur}
*Ashar:* ${Ashar}
*Maghrib:* ${Maghrib}
*Isya:* ${Isya}`
            
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}
