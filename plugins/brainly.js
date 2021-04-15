const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('brainly');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'brainly ?(.*)', fromMe: true, desc: Lang.BRAINLY_DESC }, async (message, match) => {

        const Soal = match[1]

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

if (Config.WORKTYPE == 'public') {
  
  Asena.addCommand({ pattern: 'brainly ?(.*)', fromMe: true, desc: Lang.BRAINLY_DESC }, async (message, match) => {

        const Soal = match[1]

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
