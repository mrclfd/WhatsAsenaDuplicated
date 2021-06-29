/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('profile');

Asena.addCommand({pattern: 'kickme', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

Asena.addCommand({pattern: 'pp', fromMe: true, desc: Lang.PP_DESC}, (async (message, match) => {    
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location), {thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2ZTAxMDAwMDI0MDIwMDAwZTMwMjAwMDAyYjAzMDAwMDkwMDMwMDAwYzkwNDAwMDBiMDA1MDAwMDI1MDYwMDAwNjkwNjAwMDBiNzA2MDAwMGVjMDcwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIAJYAlgMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAgMHAf/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAHyoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABy7tkdI7rzBTuUaV6x5RasWvyJqxjzgAAAStTj/Stmc4aXV6W887dqi+L7ZtvFsH92U2LeMDDmAAAAWVaLSu4DSx6X4bONleJKn0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAIRAAAgMAAQQDAQAAAAAAAAAAAwQBAgUABhEUMBMVcBb/2gAIAQEAAQUC/CYjvPxW58VueMTnik5ChZ54ZuQkaeeAfkomiPSsIhj/AE2rxjM0VwtgfSGLP1CinO16Vpn696xnbEccI8mRaXXaemtppbo85SudNhKwWBWcpo1AtnZdFa16o837LECO5X9IFtHKzbZ9PUi6dG5H2Lp0tNLaDGg5xMziB/uNeq/9DpcZORk62m2sD2zaZ5Npme89vw3/xAAeEQABBAIDAQAAAAAAAAAAAAABAAIDFDFSIEFQQv/aAAgBAwEBPwHwWtLsIQyHpVpdSqk+h5tcW4QnkHatTD6V2fc+t//EAB8RAAEDBAMBAAAAAAAAAAAAAAMAARQCBBFSIEJQkf/aAAgBAgEBPwHwB25StminKh3DdH+KIfR1FNq6jF1fkK5KJsDqwp1w/d1MPu6lm2dSjbet/8QALhAAAQMDAgMGBgMAAAAAAAAAAQACAwQREiExExSRBSMwNEFCECJhcJLRUXGi/9oACAEBAAY/AvsTb47Dqth1Ww6rYdVsOq2HVXsOvhMjhGUjjoF5YfkP2nSywWY3c3CY+phwa7QFMkjpwWOFwbhE8tp9CCg4U2h/mwXlm/kP2sKmIMd/Sl4EbXBg+b6eEHMJDh6hTiSV7xw/c6/qnVVXM/lojoHv0LlVQV1RTSMmPdhjtWKiirqieEsbjeE76LnKarrKhrTiWudfqF3HMcPAWwvZQkzdocdrcnCS+F1UUHabA6ny+R/qzRdoEPEkEkd43j138Nz6Z+DnCx0um0pf3DfaBZBzTZw1BVOyrOWWsYsBupOXdg/G7tjpuhMZu6JtfFq8x/gJ00xykduU6GGYiJ3ttfxhcnRXJN1a+n2O/8QAJhABAAICAgEDAwUAAAAAAAAAAREhADFBYZEQMFFwgfBxobHB8f/aAAgBAQABPyH6EsQ251nnOs84OT6BA1egghXjZ/h8SKMJ9pUzCaJfSMELnF1w4ZBUiG40w1h5Nb2OucZpRbIeBwiYEkk8LilYIk5EkyE6RjHub7ogz8vT7V0FBITCpSYJCnzjqMBD40y6K+8ZNWJNpwH7Pn5weKCq4BmtYc0AULWjucYMv1BrnWRdCaChZZduRKChLYfk/wA4JDaekb+T27aQUaffLNdIW3cbxbzQGxMM7Li04/vBzWShja6ax1OPMu61050vx6yQSZgCeOMm6BKAvcTr3rIuEusSoLau8mM0OJr6Hf/aAAwDAQACAAMAAAAQ8888888888888888888888888888888807+6z88888mm3jr8888888EUc8888888888888888888888888888888888888888888/8QAGhEBAAMBAQEAAAAAAAAAAAAAAQARkSFQIP/aAAgBAwEBPxDweObilDxgrRkxItwfvruolY9gix7FSnT1v//EAB4RAQACAgEFAAAAAAAAAAAAAAEAkSExUBEgUdHx/9oACAECAQE/EOAYKB4FjuXIluhnzmI5anuTMDnDHasi+7Iv7oodF3y3/8QAIhABAAICAgEFAQEAAAAAAAAAAREhADFBUTAQYXBx8YHB/9oACAEBAAE/EPgmEmSCXPzGfmMECBJKZ+IyQQ9a5+HyGSN+kAXopV0eIpspxQalQNO3DMRv8Eo8oKVbTRhdWIc5YSiaY09ZCwmlClQzKecN3KX8IlfoMB7II69hT6TJpLiLxUOJ52SC94ayOA7MKtRNaJ14no5K2diWZAKkCWwEw5PbyKBFUG1fLo50/SzwCExARt6YM4IBbALhJPeTNKJLSShghLQXxhwXfNqjWZ3zrI90nYBxDQTYZH9LDMWZCYlaWTCCgsFQENkA7CwpmTof88QAZESpjEBCwwE4I1IVlAbK2t3iezthSRHsTNUVEyoNSJkw3atUMBCUCki4X3y3CF86pY9w49B5qwBzQAoAUGsMQgCwEoNpdR35lkkQasDUdZsWui8LecVBWkag9x8Hf//Z"});
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

Asena.addCommand({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC}, (async (message, match) => {    
    if (message.reply_message !== false) {
        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });
        await message.client.blockUser(message.reply_message.jid, "add");
    } else if (message.mention !== false) {
        message.mention.map(async user => {
            await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(user, "add");
        });
    } else if (!message.jid.includes('-')) {
        await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
        await message.client.blockUser(message.jid, "add");
    } else {
        await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC}, (async (message, match) => {    
    if (message.reply_message !== false) {
        await message.client.blockUser(message.reply_message.jid, "remove");
        await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
            quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
        });
    } else if (message.mention !== false) {
        message.mention.map(async user => {
            await message.client.blockUser(user, "remove");
            await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
            });    
        });
    } else if (!message.jid.includes('-')) {
        await message.client.blockUser(message.jid, "remove");
        await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
    } else {
        await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
    }
}));
 
    Asena.addCommand({pattern: 'jid ?(.*)', fromMe: true, desc: Lang.JID_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
    
    Asena.addCommand({pattern: 'wame ?(.*)', fromMe: true, desc: Lang.WAME_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.NEED_UWONG, MessageType.text);
        }
    }));

