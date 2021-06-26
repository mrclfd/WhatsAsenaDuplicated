/*
# Copyright (C) 2020 MuhammedKpln.
*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const Config = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')

    Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${userName}`)
          .then(async (response) => {
            const {
              profile_pic,
              username,
              bio,
              follower,
              following,
              fullname,
              is_private,
            } = response.data

            const profileBuffer = await axios.get(profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = `*INSTAGRAM PROFILE*

*${Lang.USERNAME}* : @${username}
*${Lang.NAME}* : ${fullname}
*${Lang.BIO}* : (${bio})
*${Lang.FOLLOWS}* : ${following}
*${Lang.FOLLOWERS}* : ${follower}
*${Lang.IS_PRIVATE}* : ${is_private}

Instagram stalker - BOT`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )

    Asena.addCommand({ pattern: 'ttdl ?(.*)', fromMe: true, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get('https://api.lolhuman.xyz/api/tiktok?apikey='+Config.LH_API+'&url='+userName+'')
          .then(async (response) => {
            const {
              link,
            } = response.data.result

            const profileBuffer = await axios.get(link, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'Video TikTod No WM - BOT',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
