const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('jadwalshalat');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'adzan ?(.*)', fromMe: true, desc: Lang.ADZAN_DESC }, async (message, match) => {

        const Daerah = match[1]

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${Daerah}`)
          .then(async (response) => {
            const {
              Imsyak,
              Subuh,
              Dhuha,
              Dzuhur,
              Ashar,
              Maghrib,
              Isya,
            } = response.data

            const msg = "*Jadwal Sholat* 📍 Daerah ```${Daerah}```\n\n```Imsak   :``` *${Imsyak}*\n```Subuh   :``` *${Subuh}*\n```Dhuha   :``` *${Dhuha}*\n```Dzuhur  :``` *${Dzuhur}*\n```Ashar   :``` *${Ashar}*\n```Maghrib :``` *${Maghrib}*\n```Isya    :``` *${Isya}*"

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}

if (Config.WORKTYPE == 'public') {
  
  Asena.addCommand({ pattern: 'adzan ?(.*)', fromMe: true, desc: Lang.ADZAN_DESC }, async (message, match) => {

        const Daerah = match[1]

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${Daerah}`)
          .then(async (response) => {
            const {
              Imsyak,
              Subuh,
              Dhuha,
              Dzuhur,
              Ashar,
              Maghrib,
              Isya,
            } = response.data

            const msg = "*Jadwal Sholat* 📍 Daerah ```${Daerah}```\n\n```Imsak   :``` *${Imsyak}*\n```Subuh   :``` *${Subuh}*\n```Dhuha   :``` *${Dhuha}*\n```Dzuhur  :``` *${Dzuhur}*\n```Ashar   :``` *${Ashar}*\n```Maghrib :``` *${Maghrib}*\n```Isya    :``` *${Isya}*"

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}
