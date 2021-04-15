/* Codded by @mrclfd
Telegram: t.me/mrclfd
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('fun');

if (Config.WORKTYPE == 'private') {
	
 // HARTA TAHTA YAHAHA [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'hartatahta ?(.*)', fromMe: true, desc: Lang.HARTATAHTA_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // BLACK PINK [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'blackpink ?(.*)', fromMe: true, desc: Lang.BLACKPINK_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // MARVEL [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'marvel ?(.*)', fromMe: true, desc: Lang.MARVEL_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${split[0]}&text2=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // PH [LOGO MAKER]
    
    Asena.addCommand({ pattern: 'ph ?(.*)', fromMe: true, desc: Lang.PH_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=apivinz&text1=${split[0]}&text2=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // QUOTE [IMAGE MAKER]
	
    Asena.addCommand({ pattern: 'q ?(.*)', fromMe: true, desc: Lang.QUOTE_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.xteam.xyz/quotemaker?APIKEY=10c4105200edc0f0&text=${split[0]}&wm=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 /* Get random loli */
    Asena.addCommand({ pattern: 'loli$', fromMe: true, desc: Lang.LOLI_DESC }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 /* Get random waifu */
    Asena.addCommand({ pattern: 'waifu$', fromMe: true, desc: Lang.WAIFU_DESC }, async (message, match) => {
        await axios
          .get(`https://docs-jojo.herokuapp.com/api/waifu`)
          .then(async (response) => {
            const {
              name,
              image,
            } = response.data

            const profileBuffer = await axios.get(image, {
              responseType: 'arraybuffer',
            })

            const msg = `${Lang.WAIFU_NAME} ${name}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
      },
    )
	
	/* Get random husbu */
    Asena.addCommand({ pattern: 'husbu$', fromMe: true, desc: Lang.HUSBU_DESC }, async (message, match) => {
        await axios
          .get(`https://docs-jojo.herokuapp.com/api/husbuando`)
          .then(async (response) => {
            const {
              waifu,
              image,
            } = response.data

            const profileBuffer = await axios.get(image, {
              responseType: 'arraybuffer',
            })

            const msg = `${Lang.HUSBU_NAME} ${waifu}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
      },
    )

  /* Get random waifu v2 */
     Asena.addCommand({ pattern: 'waifu2$', fromMe: true, desc: Lang.WAIFU2_DESC }, async (message, match) => {

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/waifu2`)
          .then(async (response) => {
            const {
              img,
            } = response.data

            const profileBuffer = await axios.get(img, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: ' ',
              })
          })
       },
    )
	    /*
    Asena.addCommand({ pattern: 'wattpad ?(.*)', fromMe: true, desc: Lang.WATTPAD_DESC }, async (message, match) => {
      const userName = match[1]
	    
	    await axios
          .get(`https://docs-jojo.herokuapp.com/api/wattpad_search?q=${userName}`)
          .then(async (response) => {
            const {
              title,
              reads,
	      votes,
              description,
	      url,
	      thumb,
            } = response.data.result

            const profileBuffer = await axios.get(thumb, {
              responseType: 'arraybuffer',
            })

            const msg = `*${Lang.WATTPAD_SEARCH}* : ${userName}
*${Lang.JUDULE}* : ${title}
*${Lang.DIWOCONE}* : ${reads}
*${Lang.VOTENE}* : ${votes}
*${Lang.DESKRIPSINE}* : ${description}
*${Lang.LINKE}* ${url}:`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
      },
    )
    */
	    /* Dice Game codded by @phaticusthiccy */
	Asena.addCommand({pattern: 'roll$', fromMe: true, desc: Lang.DICE_DESC}, (async (message, match) => {
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "*1*";
            r_text[1] = "*2*";
            r_text[2] = "*3*";
            r_text[3] = "*4*";
            r_text[4] = "*5*";
            r_text[5] = "*6*";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, Lang.DICE_RESULT + `${r_text[i]}`, MessageType.text);
        }));
	
	// Empty text
	Asena.addCommand({pattern: 'b$', fromMe: true, desc: Lang.EMPTY_DESC}, (async (message, match) => {
            

            await message.client.sendMessage(message.jid, '                                          \n                                          ', MessageType.text);
        }));
	// Empty text2
	Asena.addCommand({pattern: 'bb$', fromMe: true, desc: Lang.EMPTY_DESC}, (async (message, match) => {
            

            await message.client.sendMessage(message.jid, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', MessageType.text);
        }));
	
	// https://jalantikus.com/tips/kata-kata-bucin/
	// Improvement by @mrclfd
	Asena.addCommand({pattern: 'bucin$', fromMe: true, desc: Lang.BUCIN_DESC}, (async (message, match) => {

    var r_text = new Array ();
  r_text[0] = "```Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.```";
  r_text[1] = "```Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.```";
  r_text[2] = "```Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.```";
  r_text[3] = "```Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.```";
  r_text[4] = "```Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.```";
  r_text[5] = "```Pacar orang adalah jodoh kita yang tertunda.```";
  r_text[6] = "```Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.```";
  r_text[7] = "```Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.```";
  r_text[8] = "```Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.```";
  r_text[9] = "```Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.```";
  r_text[10] = "```Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.```";
  r_text[11] = "```Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.```";
  r_text[12] = "```Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.```";
  r_text[13] = "```Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.```";
  r_text[14] = "```Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.```";
  r_text[15] = "```Aku ingin menjadi satu-satunya, bukan salah satunya.```";
  r_text[16] = "```Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.```";
  r_text[17] = "```Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.```";
  r_text[18] = "```Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.```";
  r_text[19] = "```Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.```";
  r_text[20] = "```Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.```";
  r_text[21] = "```Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.```";
  r_text[22] = "```Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.```";
  r_text[23] = "```Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.```";
  r_text[24] = "```Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.```";
  r_text[25] = "```Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.```";
  r_text[26] = "```Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.```";
  r_text[27] = "```Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.```";
  r_text[28] = "```Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.```";
  r_text[29] = "```Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.```";
  r_text[30] = "```Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.```";
  r_text[31] = "```Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.```";
  r_text[32] = "```Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.```";
  r_text[33] = "```Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.```";
  r_text[34] = "```Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.```";
  r_text[35] = "```Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.```";
  r_text[36] = "```Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.```";
  r_text[37] = "```Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.```";
  r_text[38] = "```PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.```";
  r_text[39] = "```Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.```";
  r_text[40] = "```Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.```";
  r_text[41] = "```Makan apapun aku suka asal sama kamu, termasuk makan ati.```";
  r_text[42] = "```Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.```";
  r_text[45] = "```Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.```";
  r_text[46] = "```Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya :)```";
  r_text[47] = "```Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.```";
  r_text[48] = "```Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu :)```";
  r_text[49] = "```Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.```";
  r_text[50] = "```Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.```";
  r_text[51] = "```Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.```";
  r_text[52] = "```Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.```";
  r_text[53] = "```Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.```";
  r_text[54] = "```Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal.```";
  r_text[55] = "```Denganmu, jatuh cinta adalah patah hati paling sengaja.```";
  r_text[56] = "```Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.```";
  r_text[57] = "```Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.```";
  r_text[58] = "```Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.```";
  r_text[59] = "```Terkadang aku iri sama layangan, talinya putus saja masih dikejar kejar dan gak rela direbut orang lain.```";
  r_text[60] = "```Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.```";
  r_text[61] = "```Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku :)```";
  r_text[62] = "```Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.```";
  r_text[63] = "```Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.```";
  r_text[64] = "```Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.```";
  r_text[65] = "```Kamu adalah patah hati terbaik yang gak pernah aku sesali.```";
  r_text[66] = "```Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.```";
  r_text[67] = "```Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.```";
  r_text[68] = "```Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.```";
  r_text[69] = "```Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.```";
  r_text[70] = "```Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.```";
  r_text[71] = "```Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan.```";
  r_text[72] = "```Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.```";
  r_text[73] = "```Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.```";
  r_text[74] = "```Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.```";
  r_text[75] = "```Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.```";
  r_text[76] = "```Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.```";
  r_text[77] = "```Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.```";
  r_text[78] = "```Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.```";
  r_text[79] = "```Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.```";
  r_text[80] = "```Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.```";
  r_text[81] = "```Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan :(```";
  r_text[82] = "```Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?```";
  r_text[83] = "```Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.```";
  r_text[84] = "```Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo```";
  r_text[85] = "```Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.```";
  r_text[86] = "```Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.```";
  r_text[87] = "```Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.```";
  r_text[88] = "```Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.```";
  r_text[89] = "```Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.```";
  r_text[90] = "```keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.```";
  r_text[91] = "```Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.```";
  r_text[92] = "```Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.```";
  r_text[93] = "```Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.```";
  r_text[94] = "```Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.```";
  r_text[95] = "```Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.```";
  r_text[96] = "```Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.```";
  r_text[97] = "```Saben dino kegowo ngimpi tapi ora biso nduweni.```";
  r_text[98] = "```Ora ketemu koe 30 dino rasane koyo sewulan.```";
  r_text[99] = "```Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.```";
  r_text[100] = "```Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.```";
  r_text[101] = "```Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.```";
  r_text[102] = "```Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.```";
  r_text[103] = "```Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.```";
  r_text[104] = "```Kanyaah akang moal luntur najan make Bayclean.```";
  r_text[105] = "```Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.```";
  r_text[106] = "```Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.```";
  r_text[107] = "```Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).```";
  r_text[108] = "```Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.```";
  r_text[109] = "```Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.```";
  r_text[110] = "```Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.```";
  r_text[111] = "```Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.```";
  r_text[112] = "```Cukup jaringan aja yang hilang, kamu jangan.```";
  r_text[113] = "```Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.```";
  r_text[114] = "```Musuhku adalah mereka yang ingin memilikimu juga.```";
  r_text[115] = "```Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?```";
  r_text[116] = "```Jam tidurku hancur dirusak rindu.```";
  r_text[117] = "```Cukup China aja yang jauh, cinta kita jangan.```";
  r_text[118] = "```Yang penting itu kebahagiaan kamu, aku sih gak penting.```";
  r_text[119] = "```Cuma satu keinginanku, dicintai olehmu.```";
  r_text[120] = "```Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.```";
  r_text[121] = "```Cukup antartika aja yang jauh. Antarkita jangan.```";
var i = Math.floor(122*Math.random())

await message.client.sendMessage(message.jid, `${r_text[i]}` + '\n\n-- Bot', MessageType.text);

}));
	// Pantun diambil dari google dan disusun oleh @mrclfd
	// Improvement by @mrclfd
	// Pantun source: teman sekolah dan nak twitter
	Asena.addCommand({pattern: 'pantun$', fromMe: true, desc: Lang.PANTUN_DESC}, (async (message, match) => {

    var r_text = new Array ();
  r_text[0] = "```Ikan hiu dalem gentong\nI love you, tapi boong.```";
  r_text[1] = "```Ulat bulu dielus-elus, du yu redi tulus?```";
  r_text[2] = "```Jambu merah di dinding, jangan marah just kidding.```";
  r_text[3] = "```Ikan hiu makan awkarin, yaudah biarin.```";
  r_text[4] = "```Dua tiga Cakra Khan, astaghfirullah Bersihkan-bersihkan.```";
  r_text[5] = "```Ada ranting ada kayu, aku nothing without you.```";
  r_text[6] = "```Sayur pare sayur tomat, i don't care Bodoamat.```";
  r_text[7] = "```Beli buku isinya tebal\nHabis itu beli paku\nIni serius bukan gombal\nMau ngga jadi pacarku.```";
  r_text[8] = "```Ikan hiu ikan kerapu\ni love you, tapi dulu :)```";
  r_text[9] = "```Ikan hiu lagi berantem, hhmmmm....```";
  r_text[10] = "```Mas Alek pergi memancing, muka jelek kok tukang ghosting 🗿```";
  r_text[11] = "```Jalan-jalan Ke Kediri\nJangan lupa beli pakaian\nIya nih masih sendiri\nGa pengen ngajak jadian?```";
  r_text[12] = "```Tuku batik gratis besusu\nSabaro sithik ampun kesusu.```";
  r_text[13] = "```Ikan kakap ikan patin\nMohon maaf lahir dan batin.```";
  r_text[14] = "```Tukang papan makan kayu, yaampun pacaran yu :)```";
  r_text[15] = "```Jalan-jalan Ke Bali\nMalah nyasar Ke Kediri\nYa Mo Gimana lagi, orang takdirnya masih sendiri :(```";
  r_text[16] = "```Beli durian Di Tanah Abang\nSur3nd aja bang 🗿```";
var i = Math.floor(17*Math.random())

await message.client.sendMessage(message.jid, `${r_text[i]}` + '\n\n-- Bot', MessageType.text);

}));
}


else if (Config.WORKTYPE == 'public') {
	
 // HARTA TAHTA YAHAHA [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'hartatahta ?(.*)', fromMe: true, desc: Lang.HARTATAHTA_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // BLACK PINK [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'blackpink ?(.*)', fromMe: true, desc: Lang.BLACKPINK_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // MARVEL [LOGO MAKER]
	
    Asena.addCommand({ pattern: 'marvel ?(.*)', fromMe: true, desc: Lang.MARVEL_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${split[0]}&text2=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // PH [LOGO MAKER]
    
    Asena.addCommand({ pattern: 'ph ?(.*)', fromMe: true, desc: Lang.PH_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=apivinz&text1=${split[0]}&text2=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
 // QUOTE [IMAGE MAKER]
	
    Asena.addCommand({ pattern: 'q ?(.*)', fromMe: true, desc: Lang.QUOTE_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
	    
	    var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[0];
            bottomText = split[1];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }

        var ttinullimage = await axios.get(`https://api.xteam.xyz/quotemaker?APIKEY=10c4105200edc0f0&text=${split[0]}&wm=${split[1]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
  
 /* Get random loli */
    Asena.addCommand({ pattern: 'loli$', fromMe: true, desc: Lang.LOLI_DESC }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ' })

    }));
	
	/* Get random waifu */
    Asena.addCommand({ pattern: 'waifu$', fromMe: true, desc: Lang.WAIFU_DESC }, async (message, match) => {
        await axios
          .get(`https://docs-jojo.herokuapp.com/api/waifu`)
          .then(async (response) => {
            const {
              name,
              image,
            } = response.data

            const profileBuffer = await axios.get(image, {
              responseType: 'arraybuffer',
            })

            const msg = `${Lang.WAIFU_NAME} ${name}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
      },
    )
	
	/* Get random husbu */
    Asena.addCommand({ pattern: 'husbu$', fromMe: true, desc: Lang.HUSBU_DESC }, async (message, match) => {
        await axios
          .get(`https://docs-jojo.herokuapp.com/api/husbuando`)
          .then(async (response) => {
            const {
              waifu,
              image,
            } = response.data

            const profileBuffer = await axios.get(image, {
              responseType: 'arraybuffer',
            })

            const msg = `${Lang.HUSBU_NAME} ${waifu}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
      },
    )
    
  /* Get random waifu v2 */
     Asena.addCommand({ pattern: 'waifu2$', fromMe: true, desc: Lang.WAIFU2_DESC }, async (message, match) => {

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/waifu2`)
          .then(async (response) => {
            const {
              img,
            } = response.data

            const profileBuffer = await axios.get(img, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: ' ',
              })
          })
       },
    )
	 /* Dice Game codded by @phaticusthiccy */
	Asena.addCommand({pattern: 'roll$', fromMe: true, desc: Lang.DICE_DESC}, (async (message, match) => {
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "*1*";
            r_text[1] = "*2*";
            r_text[2] = "*3*";
            r_text[3] = "*4*";
            r_text[4] = "*5*";
            r_text[5] = "*6*";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, Lang.DICE_RESULT + `${r_text[i]}`, MessageType.text);
        }));
	
	// Empty text
	Asena.addCommand({pattern: 'b$', fromMe: true, desc: Lang.EMPTY_DESC}, (async (message, match) => {
            

            await message.client.sendMessage(message.jid, '                                          \n                                          ', MessageType.text);
        }));
	// Empty text2
	Asena.addCommand({pattern: 'bb$', fromMe: true, desc: Lang.EMPTY_DESC}, (async (message, match) => {
            

            await message.client.sendMessage(message.jid, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', MessageType.text);
        }));
	
	// https://jalantikus.com/tips/kata-kata-bucin/
	// Improvement by @mrclfd
	Asena.addCommand({pattern: 'bucin$', fromMe: true, desc: Lang.BUCIN_DESC}, (async (message, match) => {

    var r_text = new Array ();
  r_text[0] = "```Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.```";
  r_text[1] = "```Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.```";
  r_text[2] = "```Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.```";
  r_text[3] = "```Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.```";
  r_text[4] = "```Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.```";
  r_text[5] = "```Pacar orang adalah jodoh kita yang tertunda.```";
  r_text[6] = "```Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.```";
  r_text[7] = "```Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.```";
  r_text[8] = "```Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.```";
  r_text[9] = "```Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.```";
  r_text[10] = "```Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.```";
  r_text[11] = "```Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.```";
  r_text[12] = "```Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.```";
  r_text[13] = "```Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.```";
  r_text[14] = "```Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.```";
  r_text[15] = "```Aku ingin menjadi satu-satunya, bukan salah satunya.```";
  r_text[16] = "```Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.```";
  r_text[17] = "```Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.```";
  r_text[18] = "```Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.```";
  r_text[19] = "```Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.```";
  r_text[20] = "```Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.```";
  r_text[21] = "```Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.```";
  r_text[22] = "```Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.```";
  r_text[23] = "```Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.```";
  r_text[24] = "```Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.```";
  r_text[25] = "```Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.```";
  r_text[26] = "```Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.```";
  r_text[27] = "```Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.```";
  r_text[28] = "```Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.```";
  r_text[29] = "```Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.```";
  r_text[30] = "```Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.```";
  r_text[31] = "```Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.```";
  r_text[32] = "```Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.```";
  r_text[33] = "```Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.```";
  r_text[34] = "```Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.```";
  r_text[35] = "```Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.```";
  r_text[36] = "```Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.```";
  r_text[37] = "```Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.```";
  r_text[38] = "```PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.```";
  r_text[39] = "```Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.```";
  r_text[40] = "```Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.```";
  r_text[41] = "```Makan apapun aku suka asal sama kamu, termasuk makan ati.```";
  r_text[42] = "```Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.```";
  r_text[45] = "```Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.```";
  r_text[46] = "```Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya :)```";
  r_text[47] = "```Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.```";
  r_text[48] = "```Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu :)```";
  r_text[49] = "```Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.```";
  r_text[50] = "```Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.```";
  r_text[51] = "```Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.```";
  r_text[52] = "```Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.```";
  r_text[53] = "```Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.```";
  r_text[54] = "```Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal.```";
  r_text[55] = "```Denganmu, jatuh cinta adalah patah hati paling sengaja.```";
  r_text[56] = "```Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.```";
  r_text[57] = "```Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.```";
  r_text[58] = "```Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.```";
  r_text[59] = "```Terkadang aku iri sama layangan, talinya putus saja masih dikejar kejar dan gak rela direbut orang lain.```";
  r_text[60] = "```Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.```";
  r_text[61] = "```Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku :)```";
  r_text[62] = "```Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.```";
  r_text[63] = "```Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.```";
  r_text[64] = "```Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.```";
  r_text[65] = "```Kamu adalah patah hati terbaik yang gak pernah aku sesali.```";
  r_text[66] = "```Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.```";
  r_text[67] = "```Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.```";
  r_text[68] = "```Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.```";
  r_text[69] = "```Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.```";
  r_text[70] = "```Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.```";
  r_text[71] = "```Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan.```";
  r_text[72] = "```Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.```";
  r_text[73] = "```Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.```";
  r_text[74] = "```Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.```";
  r_text[75] = "```Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.```";
  r_text[76] = "```Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.```";
  r_text[77] = "```Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.```";
  r_text[78] = "```Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.```";
  r_text[79] = "```Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.```";
  r_text[80] = "```Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.```";
  r_text[81] = "```Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan :(```";
  r_text[82] = "```Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?```";
  r_text[83] = "```Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.```";
  r_text[84] = "```Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo```";
  r_text[85] = "```Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.```";
  r_text[86] = "```Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.```";
  r_text[87] = "```Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.```";
  r_text[88] = "```Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.```";
  r_text[89] = "```Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.```";
  r_text[90] = "```keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.```";
  r_text[91] = "```Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.```";
  r_text[92] = "```Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.```";
  r_text[93] = "```Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.```";
  r_text[94] = "```Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.```";
  r_text[95] = "```Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.```";
  r_text[96] = "```Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.```";
  r_text[97] = "```Saben dino kegowo ngimpi tapi ora biso nduweni.```";
  r_text[98] = "```Ora ketemu koe 30 dino rasane koyo sewulan.```";
  r_text[99] = "```Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.```";
  r_text[100] = "```Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.```";
  r_text[101] = "```Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.```";
  r_text[102] = "```Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.```";
  r_text[103] = "```Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.```";
  r_text[104] = "```Kanyaah akang moal luntur najan make Bayclean.```";
  r_text[105] = "```Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.```";
  r_text[106] = "```Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.```";
  r_text[107] = "```Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).```";
  r_text[108] = "```Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.```";
  r_text[109] = "```Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.```";
  r_text[110] = "```Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.```";
  r_text[111] = "```Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.```";
  r_text[112] = "```Cukup jaringan aja yang hilang, kamu jangan.```";
  r_text[113] = "```Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.```";
  r_text[114] = "```Musuhku adalah mereka yang ingin memilikimu juga.```";
  r_text[115] = "```Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?```";
  r_text[116] = "```Jam tidurku hancur dirusak rindu.```";
  r_text[117] = "```Cukup China aja yang jauh, cinta kita jangan.```";
  r_text[118] = "```Yang penting itu kebahagiaan kamu, aku sih gak penting.```";
  r_text[119] = "```Cuma satu keinginanku, dicintai olehmu.```";
  r_text[120] = "```Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.```";
  r_text[121] = "```Cukup antartika aja yang jauh. Antarkita jangan.```";
var i = Math.floor(122*Math.random())

await message.client.sendMessage(message.jid, `${r_text[i]}` + '\n\n-- Bot', MessageType.text);

}));
	// Pantun diambil dari google dan disusun oleh @mrclfd
	// Improvement by @mrclfd
	// Pantun source: teman sekolah dan nak twitter
	Asena.addCommand({pattern: 'pantun$', fromMe: true, desc: Lang.PANTUN_DESC}, (async (message, match) => {

    var r_text = new Array ();
  r_text[0] = "```Ikan hiu dalem gentong\nI love you, tapi boong.```";
  r_text[1] = "```Ulat bulu dielus-elus, du yu redi tulus?```";
  r_text[2] = "```Jambu merah di dinding, jangan marah just kidding.```";
  r_text[3] = "```Ikan hiu makan awkarin, yaudah biarin.```";
  r_text[4] = "```Dua tiga Cakra Khan, astaghfirullah Bersihkan-bersihkan.```";
  r_text[5] = "```Ada ranting ada kayu, aku nothing without you.```";
  r_text[6] = "```Sayur pare sayur tomat, i don't care Bodoamat.```";
  r_text[7] = "```Beli buku isinya tebal\nHabis itu beli paku\nIni serius bukan gombal\nMau ngga jadi pacarku.```";
  r_text[8] = "```Ikan hiu ikan kerapu\ni love you, tapi dulu :)```";
  r_text[9] = "```Ikan hiu lagi berantem, hhmmmm....```";
  r_text[10] = "```Mas Alek pergi memancing, muka jelek kok tukang ghosting 🗿```";
  r_text[11] = "```Jalan-jalan Ke Kediri\nJangan lupa beli pakaian\nIya nih masih sendiri\nGa pengen ngajak jadian?```";
  r_text[12] = "```Tuku batik gratis besusu\nSabaro sithik ampun kesusu.```";
  r_text[13] = "```Ikan kakap ikan patin\nMohon maaf lahir dan batin.```";
  r_text[14] = "```Tukang papan makan kayu, yaampun pacaran yu :)```";
  r_text[15] = "```Jalan-jalan Ke Bali\nMalah nyasar Ke Kediri\nYa Mo Gimana lagi, orang takdirnya masih sendiri :(```";
  r_text[16] = "```Beli durian Di Tanah Abang\nSur3nd aja bang 🗿```";
var i = Math.floor(17*Math.random())

await message.client.sendMessage(message.jid, `${r_text[i]}` + '\n\n-- Bot', MessageType.text);

}));
}
