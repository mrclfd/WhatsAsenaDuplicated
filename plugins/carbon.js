/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

/* Theme ditambah by @mrclfd */

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('carbon');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'carbon ?(.*)', fromMe: true, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=monokai&backgroundColor=rgba%2874%2C74%2C74%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ungu */
    Asena.addCommand({pattern: '🟪 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=darcula&backgroundColor=rgba(144,%2019,%20254,%20100)&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* abang */
    Asena.addCommand({pattern: '🟥 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=one-light&backgroundColor=red&language=markdown&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* oren */
    Asena.addCommand({pattern: '🟧 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=lucario&backgroundColor=rgba%28255%2C140%2C0%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* kuning */
    Asena.addCommand({pattern: '🟨 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28255%2C236%2C0%2C1%29&language=markdown&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* biru */
    Asena.addCommand({pattern: '🟦 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=cobalt&backgroundColor=rgba%2816%2C39%2C82%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ireng */
    Asena.addCommand({pattern: '⬛ ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=seti&backgroundColor=rgba%280%2C0%2C0%2C1%29&language=cobol&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* putih */
    Asena.addCommand({pattern: '⬜ ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=one-light&backgroundColor=rgba%28255%2C255%2C255%2C1%29&language=cobol&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* soklat */
    Asena.addCommand({pattern: '🟫 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28139%2C87%2C42%2C1%29&language=mathematica&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ijo */
    Asena.addCommand({pattern: '🟩 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28133%2C255%2C0%2C1%29&language=auto&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'carbon ?(.*)', fromMe: true, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=monokai&backgroundColor=rgba%2874%2C74%2C74%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ungu */
    Asena.addCommand({pattern: '🟪 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=darcula&backgroundColor=rgba(144,%2019,%20254,%20100)&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* abang */
    Asena.addCommand({pattern: '🟥 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=one-light&backgroundColor=red&language=markdown&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* oren */
    Asena.addCommand({pattern: '🟧 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=lucario&backgroundColor=rgba%28255%2C140%2C0%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* kuning */
    Asena.addCommand({pattern: '🟨 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28255%2C236%2C0%2C1%29&language=markdown&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* biru */
    Asena.addCommand({pattern: '🟦 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=cobalt&backgroundColor=rgba%2816%2C39%2C82%2C1%29&language=javascript&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ireng */
    Asena.addCommand({pattern: '⬛ ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=seti&backgroundColor=rgba%280%2C0%2C0%2C1%29&language=cobol&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* putih */
    Asena.addCommand({pattern: '⬜ ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=one-light&backgroundColor=rgba%28255%2C255%2C255%2C1%29&language=cobol&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* soklat */
    Asena.addCommand({pattern: '🟫 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28139%2C87%2C42%2C1%29&language=mathematica&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
    
    /* ijo */
    Asena.addCommand({pattern: '🟩 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=base16-light&backgroundColor=rgba%28133%2C255%2C0%2C1%29&language=auto&exportSize=3x`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' '})

    }));
}

