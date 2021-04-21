/*
# Copyright (C) 2020 MuhammedKpln.
# edited by Vai838

# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const Config = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')

if (Config.WORKTYPE == 'private') {

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
*${Lang.IS_PRIVATE}* : ${is_private}`

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
          .get('https://api.lolhuman.xyz/api/tiktok?apikey='+Config.LH_API+'&url='+${userName}+'')
          .then(async (response) => {
            const {
              link,
            } = response.data

            const profileBuffer = await axios.get(link, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: ' ',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

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
*${Lang.IS_PRIVATE}* : ${is_private}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )

    Asena.addCommand({ pattern: 'ttdl ?(.*)', fromMe: false, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get('https://api.lolhuman.xyz/api/tiktok?apikey='+Config.LH_API+'&url='+${userName}+'')
          .then(async (response) => {
            const {
              link,
            } = response.data

            const profileBuffer = await axios.get(link, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: ' ',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
}
