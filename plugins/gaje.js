/*
DiCong-ed By @mrclfd
*/

const Asena = require('../events');
const { MessageType, Mimetype, } = require('@adiwajshing/baileys');
const con = require('../config');

// Deskripsi
const IDG = "Send GG word.\n⌨️ Example: .gg 🌈"
const IDF = "Send F word."
const IDX = "Send X word."
const IDY = "Send Y word."
const IDV = "Send :V word."
const IDBATU = "Send 🗿 word."

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({ pattern: 'gg ?(.*)$', fromMe: true, desc: IDG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          GGGGGG\n\n          GGGGGG\n     GGGGGGGG\n   GG                     GG\n GG\nGG                GGGG\nGG                GGGG\n GG                        GG\n   GG                      GG\n     GGGGGGGG\n          GGGGGG', MessageType.text);

            var str = "ㅤ \n          GGGGGG\n\n          GGGGGG\n     GGGGGGGG\n   GG                     GG\n GG\nGG                GGGG\nGG                GGGG\n GG                        GG\n   GG                      GG\n     GGGGGGGG\n          GGGGGG";
  
            var res = str.replace(/G/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: IDF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF', MessageType.text);

            var str = "FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF";
  
            var fres = str.replace(/F/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: IDX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
        
        Asena.addCommand({ pattern: 'y ?(.*)$', fromMe: true, desc: IDY }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'Y     Y\n Y   Y \n  Y Y  \n   Y   \n   Y   \n   Y   \n   Y   ', MessageType.text);

            var str = "Y     Y\n Y   Y \n  Y Y  \n   Y   \n   Y   \n   Y   \n   Y   ";
  
            var fres = str.replace(/Y/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
        Asena.addCommand({ pattern: ':v ?(.*)$', fromMe: true, desc: IDV }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, ' V       V\n  V     V \nv  V   V  \n    V V   \nv    V    ', MessageType.text);

            var str = " V       V\n  V     V \nv  V   V  \n    V V   \nv    V    ";
  
            var fres = str.replace(/V/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

       });

 Asena.addCommand({ pattern: '🗿 ?(.*)$', fromMe: true, desc: IDBATU }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, '👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿\n👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿\n👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👉🏻🗿👈🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿\n👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿\n👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿', MessageType.text);

            var str = "👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿\n👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿\n👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👉🏻🗿👈🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿\n👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿\n👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿";
  
            var fres = str.replace(/🗿/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

       });
   }

else if (con.WORKTYPE === 'public') {

        Asena.addCommand({ pattern: 'gg ?(.*)$', fromMe: true, desc: IDG }, async (message, match) => {

            const gsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'ㅤ \n          GGGGGG\n\n          GGGGGG\n     GGGGGGGG\n   GG                     GG\n GG\nGG                GGGG\nGG                GGGG\n GG                        GG\n   GG                      GG\n     GGGGGGGG\n          GGGGGG', MessageType.text);

            var str = "ㅤ \n          GGGGGG\n\n          GGGGGG\n     GGGGGGGG\n   GG                     GG\n GG\nGG                GGGG\nGG                GGGG\n GG                        GG\n   GG                      GG\n     GGGGGGGG\n          GGGGGG";
  
            var res = str.replace(/G/g, `${gsay}`);
        
            return await message.client.sendMessage(message.jid, res, MessageType.text);

        });

        Asena.addCommand({ pattern: 'f ?(.*)$', fromMe: true, desc: IDF }, async (message, match) => {

            const fsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF', MessageType.text);

            var str = "FFFFFFFF\nFFFFFFFF\nFF\nFF\nFF\nFFFFFF\nFFFFFF\nFF\nFF\nFF\nFF\nFF";
  
            var fres = str.replace(/F/g, `${fsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });

        Asena.addCommand({ pattern: 'x ?(.*)$', fromMe: true, desc: IDX }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X', MessageType.text);

            var str = "X               X\n  X           X\n    X       X\n      X   X\n         X\n      X   X\n    X       X\n  X           X\nX               X";
  
            var fres = str.replace(/X/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
        
        Asena.addCommand({ pattern: 'y ?(.*)$', fromMe: true, desc: IDY }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, 'Y     Y\n Y   Y \n  Y Y  \n   Y   \n   Y   \n   Y   \n   Y   ', MessageType.text);

            var str = "Y     Y\n Y   Y \n  Y Y  \n   Y   \n   Y   \n   Y   \n   Y   ";
  
            var fres = str.replace(/Y/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

        });
    }
        Asena.addCommand({ pattern: ':v ?(.*)$', fromMe: true, desc: IDV }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, ' V       V\n  V     V \nv  V   V  \n    V V   \nv    V    ', MessageType.text);

            var str = " V       V\n  V     V \nv  V   V  \n    V V   \nv    V    ";
  
            var fres = str.replace(/V/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

       });

 Asena.addCommand({ pattern: '🗿 ?(.*)$', fromMe: true, desc: IDBATU }, async (message, match) => {

            const xsay = match[1]

            if (match[1] === '') return await message.client.sendMessage(message.jid, '👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿\n👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿\n👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👉🏻🗿👈🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿\n👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿\n👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿', MessageType.text);

            var str = "👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿\n👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿\n👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👉🏻🗿👈🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿\n👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿\n👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿";
  
            var fres = str.replace(/🗿/g, `${xsay}`);
        
            return await message.client.sendMessage(message.jid, fres, MessageType.text);

       });
   }
