/*
Nekobin for WhatsAsena - W4RR10R
Dogbin added by @mrclfd

Licensed under the GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('paste');

    Asena.addCommand({pattern: 'paste$', fromMe: true, desc: Lang.NEKOBIN_DESC}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://nekobin.com/api/documents";
        try {
            const response = await got.post(base_URI, {json : {content : message.reply_message.text}}); 
            json = JSON.parse(response.body);
            neko_url = 'https://nekobin.com/' + json.result.key;
            await message.reply('*Berhasil ditempel!*\n\n```Nekobin URL:```'+neko_url+'\n```Lihat RAW:```https://nekobin.com/raw/'+json.result.key+'');        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
    
    Asena.addCommand({pattern: 'paste d$', fromMe: true, desc: Lang.DOGBIN_DESC}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://del.dog/documents";
        try {
            const response = await got.post(base_URI, {json : {content : message.reply_message.text}}); 
            json = JSON.parse(response.body);
            dogbin_url = 'https://del.dog/' + json.key;
            await message.reply('*Berhasil ditempel!*\n\n```Dogbin URL:```'+dogbin_url+'\n```Lihat RAW:```https://del.dog/raw/'+json.key+'');        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
