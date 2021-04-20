/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('tagall');


Asena.addCommand({pattern: 'tagall ?(.*)', fromMe: true, desc: Lang.TAGALL_DESC}, (async (message, match) => {

    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
}));

Asena.addCommand({pattern: 'tagadmin', fromMe: true, desc: Lang.TAGALL_DESC}, (async (message, match) => {

    grup = await message.client.groupMetadata(message.jid);
    var admins = [];
    admes = '';
    const getGroupAdmins = (participants) => {
        
        for (let i of participants) {
                i.isAdmin ? admins.push(i.jid) : ''
                admes += '@' + i.jid.split('@')[0] + ' ';
                admins.push(i.jid.replace('c.us', 's.whatsapp.net'));
        }
    }
    await message.client.sendMessage(message.jid,admes, MessageType.extendedText, {contextInfo: {mentionedJid: admins}, previewType: 0})
}));
