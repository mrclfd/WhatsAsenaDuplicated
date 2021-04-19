const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('brainly');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'brainly ?(.*)', fromMe: true, desc: Lang.BRAINLY_DESC }, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan pertanyaan!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*PERTANYAANMU:* ${soal}
*JAWABAN BRAINLY:* ${jawaban.replace(/1Pertanyaan/g, '1. *Pertanyaan*').replace(/2Pertanyaan/g, '2. *Pertanyaan*').replace(/3Pertanyaan/g, '3. *Pertanyaan*').replace(/Jawaban/g, '  *Jawaban*').replace(/Brainly ditemukan/g, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}

if (Config.WORKTYPE == 'public') {
  
  Asena.addCommand({ pattern: 'brainly ?(.*)', fromMe: false, desc: Lang.BRAINLY_DESC }, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan pertanyaan!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*SOAL:* ${soal}
*JAWABAN:* ${jawaban}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}
