/* Codded by @mrclfd // rapiUp
Telegram: t.me/mrclfd

Semoga Berfaedah dan Berkah :)
*/

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
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '*Jadwal Sholat*:\n' +
                    '📅 ```' + json.results.datetime[0].date.gregorian + ' | ' + json.results.location.timezone + '```\n' +
                    '🌏 ```' + json.results.location.city + ' | ' + json.results.location.country + '```\n\n' +
		    '```Imsak   :``` *' + json.results.datetime[0].times.Imsak + '*\n' + 
		    '```Subuh   :``` *' + json.results.datetime[0].times.Fajr + '*\n' +
		    '```Dzuhur  :``` *' + json.results.datetime[0].times.Dhuhr + '*\n' + 
		    '```Ashar   :``` *' + json.results.datetime[0].times.Asr + '*\n' + 
		    '```Maghrib :``` *' + json.results.datetime[0].times.Maghrib + '*\n' +
                    '```Isya    :``` *' + json.results.datetime[0].times.Isha + '*\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
}

if (Config.WORKTYPE == 'public') {
  
  Asena.addCommand({pattern: 'adzan ?(.*)', desc: Lang.ADZAN_DESC, fromMe: true}, async (message, match) => {

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `https://api.pray.zone/v2/times/today.json?city=${match[1]}`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '*Jadwal Sholat*:\n' +
                    '📅 ```' + json.results.datetime[0].date.gregorian + ' | ' + json.results.location.timezone + '```\n' +
                    '🌏 ```' + json.results.location.city + ' | ' + json.results.location.country + '```\n\n' +
		    '```Imsak   :``` *' + json.results.datetime[0].times.Imsak + '*\n' + 
		    '```Subuh   :``` *' + json.results.datetime[0].times.Fajr + '*\n' +
		    '```Dzuhur  :``` *' + json.results.datetime[0].times.Dhuhr + '*\n' + 
		    '```Ashar   :``` *' + json.results.datetime[0].times.Asr + '*\n' + 
		    '```Maghrib :``` *' + json.results.datetime[0].times.Maghrib + '*\n' +
                    '```Isya    :``` *' + json.results.datetime[0].times.Isha + '*\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
}
