const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    Asena.addCommand({pattern: 'donation', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://saweria.co/overlays/qr?streamKey=07bbe0821c279ce665e4f0745c29dd86&backgroundColor=%23f8e71cFF&barcodeColor=%23000000FF&username=mrclfd', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `╭─「 Donasi-nya Kakak 」
│ • Saweria [saweria.co/mrclfd]
╰────`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Terima kasih ❤️');
  
        }));
  }
  else if (con.WORKTYPE == 'public') {
  
    Asena.addCommand({pattern: 'donation', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://saweria.co/overlays/qr?streamKey=07bbe0821c279ce665e4f0745c29dd86&backgroundColor=%23f8e71cFF&barcodeColor=%23000000FF&username=mrclfd', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `╭─「 Donasi-nya Kakak 」
│ • Saweria [saweria.co/mrclfd]
╰────`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Terima kasih ❤️');
  
        }));
  }
