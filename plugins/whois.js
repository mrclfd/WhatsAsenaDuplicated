const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');

const das = "Menampilkan info group."

Asena.addCommand({ pattern: 'whois', fromMe: true, desc: das }, async (message, match) => { 

    const ppUrl = await message.client.getProfilePicture(message.jid) 

    const json = await message.client.groupMetadata(message.jid) 

    const resim = await dil.get(ppUrl, {responseType: 'arraybuffer'})

    await message.client.sendMessage(
        Buffer.from(resim.data), 
        MessageType.image, 
        { caption: "*Group ID:* " + json.id + "\n*Group Name:* " + json.subject + "\n*Description:* " + json.desc }
    );

});
