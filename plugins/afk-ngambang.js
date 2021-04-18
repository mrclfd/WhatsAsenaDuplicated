/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

// Mod by @mrclfd
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('afk');

var AFK = {
    isAfk: false,
    reason: false,
    lastseen: 0
};


// secondsToHms D,H,M,S
function secondsToHms(seconds) {
    seconds = Number(seconds)
    var d = Math.floor(seconds / (3600 * 24))
    var h = Math.floor(seconds % (3600 * 24) / 3600)
    var m = Math.floor(seconds % 3600 / 60)
    var s = Math.floor(seconds % 60)
    
    var dDisplay = d > 0 ? d + (d == 1 ? "" + Lang.OFF_DAY + ", " : "" + Lang.OFF_DAY + ", ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? "" + Lang.OFF_HOUR + ", " : "" + Lang.OFF_HOUR + ", ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "" + Lang.OFF_MINUTE + ", " : "" + Lang.OFF_MINUTE + ", ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" + Lang.OFF_SECOND : "" + Lang.OFF_SECOND) : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

if (Config.WORKTYPE == 'private') {

Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (Config.OFFAFKMSG == 'default') {

        if (AFK.isAfk && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Lang.OFF_TEXT + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Lang.OFF_TEXT + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
            } else {
                        await message.client.sendMessage(message.jid,Lang.OFF_TEXT + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
        }
    }
    else {
        if (AFK.isAfk && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Config.OFFAFKMSG + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Config.OFFAFKMSG + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
            } else {
                        await message.client.sendMessage(message.jid,Config.OFFAFKMSG + '\n' + 
                        (AFK.lastseen !== 0 ? '' + Lang.OFF_LAST_SEEN + ': ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + ' ' + Lang.OFF_AGO + '```' : '') + 
                        (AFK.reason !== false ? '\n' + Lang.OFF_REASON + ': ```' + AFK.reason + '```' : ''), MessageType.text, {quoted: message.data});            
                    }
        }
    }
}));

Asena.addCommand({pattern: 'unoff ?(.*)', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (AFK.isAfk && !message.id.startsWith('3EB0')) {
        AFK.lastseen = 0;
        AFK.reason = false;
        AFK.isAfk = false;

        await message.client.sendMessage(message.jid,Lang.OFF_IM_NOT_AFK,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'off ?(.*)', fromMe: true, deleteCommand: false, desc: Lang.OFF_DESC}, (async (message, match) => {     
    if (!AFK.isAfk) {
        AFK.lastseen = Math.round((new Date()).getTime() / 1000);
        if (match[1] !== '') { AFK.reason = match[1]; }
        AFK.isAfk = true;

        await message.client.sendMessage(message.jid,Lang.OFF_IM_AFK + (AFK.reason !== false ? ('\n' + Lang.OFF_REASON +': ```' + AFK.reason + '```') : ''),MessageType.text);
    }
}));
}
