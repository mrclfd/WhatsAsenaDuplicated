// Coded by @mrclfd

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const TinyURL = require('tinyurl');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('shortener');

if (Config.WORKTYPE == 'private') {

 // s.id SHORTENER
    Asena.addCommand({ pattern: 'sid ?(.*)', fromMe: true, desc: Lang.SID_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${linkAsli}`)
          .then(async (response) => {
            const {
              short,
              long,
            } = response.data

            const msg = `*Link asli:* ${long}\n*Link pendek:* ${short}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
  // shorturl.at SHORTENER
     Asena.addCommand({ pattern: 'sat ?(.*)', fromMe: true, desc: Lang.SAT_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/shorturl-at?url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
  // cutt.ly SHORTENER
     Asena.addCommand({ pattern: 'cutt ?(.*)', fromMe: true, desc: Lang.CUTTLY_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/cuttly?url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // bit.ly SHORTENER
    Asena.addCommand({ pattern: 'bitly ?(.*)', fromMe: true, desc: Lang.BITLY_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/shorturl/bitly?APIKEY=10c4105200edc0f0&url=${linkAsli}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${link}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // gg.gg SHORTENER
    Asena.addCommand({ pattern: 'gg ?(.*)', fromMe: true, desc: Lang.GG_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/shorturl/gg?APIKEY=10c4105200edc0f0&url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )

 // shrtco.de SHORTENER
    Asena.addCommand({ pattern: 'shrtco ?(.*)', fromMe: true, desc: Lang.SHRT_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get('https://api.lolhuman.xyz/api/shortlink2?apikey='+Config.LH_API+'&url='+match[1]+'')
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // tinyurl.com SHORTENER
    Asena.addCommand({pattern: 'tinyurl ?(.*)', fromMe: true, desc: Lang.TINYURL_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Link asli:* ${match[1]}\n*Link pendek:* ` + res, MessageType.text)
        });
    }));
}

if (Config.WORKTYPE == 'public') {

 // s.id SHORTENER
    Asena.addCommand({ pattern: 'sid ?(.*)', fromMe: false, desc: Lang.SID_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${linkAsli}`)
          .then(async (response) => {
            const {
              short,
              long,
            } = response.data

            const msg = `*Link asli:* ${long}\n*Link pendek:* ${short}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
  // shorturl.at SHORTENER
     Asena.addCommand({ pattern: 'sat ?(.*)', fromMe: false, desc: Lang.SAT_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/shorturl-at?url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
  // cutt.ly SHORTENER
     Asena.addCommand({ pattern: 'cutt ?(.*)', fromMe: false, desc: Lang.CUTTLY_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/cuttly?url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // bit.ly SHORTENER
    Asena.addCommand({ pattern: 'bitly ?(.*)', fromMe: false, desc: Lang.BITLY_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/shorturl/bitly?APIKEY=10c4105200edc0f0&url=${linkAsli}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${link}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // gg.gg SHORTENER
    Asena.addCommand({ pattern: 'gg ?(.*)', fromMe: false, desc: Lang.GG_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/shorturl/gg?APIKEY=10c4105200edc0f0&url=${linkAsli}`)
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )

 // shrtco.de SHORTENER
    Asena.addCommand({ pattern: 'shrtco ?(.*)', fromMe: false, desc: Lang.SHRT_DESC }, async (message, match) => {

        const linkAsli = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        await axios
          .get('https://api.lolhuman.xyz/api/shortlink2?apikey='+Config.LH_API+'&url='+match[1]+'')
          .then(async (response) => {
            const {
              result,
            } = response.data

            const msg = `*Link asli:* ${linkAsli}\n*Link pendek:* ${result}`

            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
    
 // tinyurl.com SHORTENER
    Asena.addCommand({pattern: 'tinyurl ?(.*)', fromMe: false, desc: Lang.TINYURL_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'*Masukkan link!*', MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Link asli:* ${match[1]}\n*Link pendek:* ` + res, MessageType.text)
        });
    }));
}
  
