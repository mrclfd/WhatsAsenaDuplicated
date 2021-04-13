const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    Asena.addCommand({pattern: 'donasi$', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('/root/WhatsAsenaDuplicated/media/image/image-i.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Buy Me a Coffee* via saweria.co/budilasidodo`})
      
    /*  
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Thx u <3');
     */
  
        }));
  }
  else if (con.WORKTYPE == 'public') {
  
    Asena.addCommand({pattern: 'donasi$', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('/root/WhatsAsenaDuplicated/media/image/image-i.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Buy Me a Coffee* via saweria.co/budilasidodo`})
      
     /*  
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Thx u <3');
     */
  
        }));
  }  
