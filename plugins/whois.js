const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');

const das = "Mendapatkan informasi grup."

Asena.addCommand({ pattern: 'whois', fromMe: true, desc: das }, async (message, match) => { 

    if (message.jid.includes('-')) {
        var json = await message.client.groupMetadataMinimal(message.jid) 

        var code = await message.client.groupInviteCode(message.jid)

        var nwjson = await message.client.groupMetadata(message.jid) 

        const msg = `*Grup ID:* ${json.id} \n*Nama grup:* ${nwjson.subject} \n*Pembuat:* ${json.owner} \n*Kode grup:* ${code} \n*Deskripsi Grup:* \n\n${nwjson.desc}`

        var ppUrl = await message.client.getProfilePicture(message.jid) 

        const resim = await dil.get(ppUrl, {responseType: 'arraybuffer'})

        await message.sendMessage(
            Buffer.from(resim.data), 
            MessageType.image, 
            { caption: msg }
        );
    }
    else {
        var status = await message.client.getStatus(message.jid) 
        var usppUrl = await message.client.getProfilePicture(message.jid) 
        var usexists = await message.client.isOnWhatsApp(message.jid)
        const nwmsg = `*JID Pengguna:* ${usexists.jid} \n*Info:* ${status.status}`
        const resimnw = await dil.get(usppUrl, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(resimnw.data), 
            MessageType.image, 
            { caption: nwmsg }
        );
    }
});
const lhs = "Menyimpan pesan yang dibalas ke-log!"
const rep = "*Silakan Balas Ke Pesan Apa Pun!*"
const lgg = "```===== [LOGGED MESSAGE] =====```\n\n"
const gr = "Dari grup dengan ID: "
const ks = "Dari nomor: "
const msh = "*Pesan:* \n\n"
Asena.addCommand({ pattern: 'log', fromMe: true, desc: lhs}, (async (message, match) => { 

    const meta = await message.client.groupMetadata(message.jid)
    const usmeta = message.client.isOnWhatsApp(message.jid)

    if (message.jid.includes('-')) {
        if (!message.reply_message) {
            return await message.client.sendMessage(
                message.jid,
                rep,
                MessageType.text
            );
        }
        else if (message.reply_message.text) {
            await message.client.sendMessage(
                message.client.user.jid,
                lgg + gr + meta.id + '\n' + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + '\n' + msh + message.reply_message.text,
                MessageType.text
            );
        }  
        else if (message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.jpg')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.jpg'),
                    MessageType.image,
                    { caption: lgg + gr + meta.id + '\n' + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ' }
                );
            });
        }
        else if (message.reply_message.video) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.mp4')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.mp4'),
                    MessageType.video,
                    { mimetype: Mimetype.mpeg, caption: lgg + gr + meta.id + '\n' + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ' }
                );
            });
        }
        else if (message.reply_message.audio) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.mp3')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.mp3'),
                    MessageType.audio,
                    { mimetype: Mimetype.mp4Audio} 
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    lgg + gr + meta.id + '\n' + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ',
                    MessageType.text
                );
            });
        }
        else {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.webp')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.webp'),
                    MessageType.sticker
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    lgg + gr + meta.id + '\n' + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ',
                    MessageType.text
                );
            });
        }
    }
    else if (!message.jid.includes('-')) {
        if (!message.reply_message) {
            return await message.client.sendMessage(
                message.jid,
                rep,
                MessageType.text
            );
        }
        else if (message.reply_message.text) {
            await message.client.sendMessage(
                message.client.user.jid,
                lgg + ks + 'wa.me/' + message.reply_message.jid + '\n' + msh + message.reply_message.text,
                MessageType.text
            );
        }  
        else if (message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.jpg')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.jpg'),
                    MessageType.image,
                    { caption: lgg + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ' }
                );
            });
        }
        else if (message.reply_message.video) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.mp4')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.mp4'),
                    MessageType.video,
                    { mimetype: Mimetype.mpeg, caption: lgg + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ' }
                );
            });
        }
        else if (message.reply_message.audio) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.mp3')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.mp3'),
                    MessageType.audio
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    lgg + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ',
                    MessageType.text
                );
            });
        }
        else {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('log.webp')
            .on('end', async () => {
                await message.client.sendMessage(
                    message.client.user.jid,
                    fs.readFileSync('log.webp'),
                    MessageType.sticker
                );
                await message.client.sendMessage(
                    message.client.user.jid,
                    lgg + ks + 'wa.me/' + message.reply_message.jid.split('@')[0] + ' ',
                    MessageType.text
                );
            });
        }
    }
}));

const scan = "Memeriksa apakah nomor yang dimasukkan terdaftar di WhatsApp."
const nos = "*Memeriksa apakah nomor yang dimasukkan terdaftar di WhatsApp.*\n*Contoh:* ```.scan 628xxxxxxxxx```"
const fin = "*Nomor tidak terdaftar! ❌*"
const ktm = "*Nomor terdaftar! ✅*\n```Alamat JID:```"

Asena.addCommand({ pattern: 'scan ?(.*)', fromMe: true, desc: scan}, (async (message, match) => { 

    if (match[1] == '') return await message.client.sendMessage(message.jid, nos, MessageType.text);

    var exists = await message.client.isOnWhatsApp(match[1])
    if (exists) {
        await message.client.sendMessage(message.jid, '```' + match[1] + '```,' + ktm + exists.jid, MessageType.text);
    }
    else {
        await message.client.sendMessage(message.jid, '```' + match[1] + '```,' + fin, MessageType.text);
    }
}));
