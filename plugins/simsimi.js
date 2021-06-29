/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const SIMI_DESC = "Chat with an AI Bot.\n Use .bot <message>"
const NEED_LOCATION = "*Invalid Request*"
const BOT = ":"
const NOT_FOUND = "*Invalid Request*"
		   
    Asena.addCommand({pattern: 'bot ?(.*)', fromMe: true, desc: SIMI_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATION);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*BOT* 🤠 ' + BOT +' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUND, MessageType.text);
	}
    });
    
