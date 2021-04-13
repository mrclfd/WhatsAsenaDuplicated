const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    Asena.addCommand({pattern: 'donasi$', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://d.top4top.io/p_1929me13r1.png', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Donasi Seikhlasnya*:\n\nUntuk saat ini kami hanya tersedia metode donasi lewat saweria secara langsung, dan ini (saweria.co/mrclfd) link halaman saweria kami atau bisa juga dengan meng-scan kode qr diatas. Semoga dengan rejeki yang kalian bagikan dapat bermanfaat bagi kami, mungkin nanti akan dibelikan api key/lainnya agar berguna juga bagi Bot :)`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Terima kasih ❤️');
  
        }));
  }
  else if (con.WORKTYPE == 'public') {
  
    Asena.addCommand({pattern: 'donasi$', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://d.top4top.io/p_1929me13r1.png', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Donasi Seikhlasnya*:\n\nUntuk saat ini kami hanya tersedia metode donasi lewat saweria secara langsung, dan ini (saweria.co/mrclfd) link halaman saweria kami atau bisa juga dengan meng-scan kode qr diatas. Semoga dengan rejeki yang kalian bagikan dapat bermanfaat bagi kami, mungkin nanti akan dibelikan api key/lainnya agar berguna juga bagi Bot :)`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Terima kasih ❤️');
  
        }));
  }  
