const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment-timezone");
const { neko_bot } = require("../myfunc/function");

exports.noToken = "Bot tokens cannot be empty, please create a bot via https://t.me/BotFather"
exports.first_chat = (botname, pushname) => {
    return `_Hello ${pushname}👋 This is a program ${botname} Click /menu to display the menu. Click /rules to find out the bot's terms & conditions._`
}
exports.rules = "_Bot Terms & Conditions_\n\n1. No spam bots allowed\n2. Contact the owner if necessary\n3. Spam will be blocked immediately\n\n_This bot is built using the official API from [@BotFather](https://t.me/BotFather) _so this bot is legal to use personally or publicly. Using the bot means agreeing that information such as id and username will be stored in our database._"
exports.getStyle = (style, style2) => {
    return `**${style2} What you entered is wrong**\n\n__Here is the list ${style2} That's right, Total__ **${style}** __${style2}__\n\n`
}
exports.mess = {
    wait: 'Loading...',
    owner: 'Owner Bot Special Features!',
    waitdata: 'View Latest Data...',
    success: 'Successfull ✔',
    private: 'Private Chat Special Feature!',
    group: 'Group Special Features!',
    banned: 'You Have Been Banned 😥'
}

exports.menu = async (neko, thumbnail, pushname, OWNER_NAME, OWNER, prefix, latensii, os, neko_bot, username, users, isCreator, user_id) => {
    var anu = `Hi ${pushname}👋

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Library :  [@BotFather](https://t.me/BotFather)
├ Prefix :   ${prefix}
├ Users :   ${users}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${neko_bot.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Server Date : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
├ Server Time : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
var button = [
    [{
        text: 'All Menu 🧩',
        callback_data: 'allmenucmd*' + user_id
    },
    {
        text: 'Creator 🎯',
        callback_data: 'ownercmd*' + user_id
    }]
]
    try {
        await neko.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await neko.replyWithPhoto({
            source: thumbnail
        }, {
            caption: anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}

exports.allmenu = async (neko, pushname, thumbnail) => {
    var menu = `
_Hello Sis ${pushname} 👋_

╭──❒ 「 *All MENU BOT* 」
│
├• *OPENAI*
├• 📌 /ai (text)
├• 📌 /img (text)
│
├• *DOWNLOADER*
├• 📌 /tiktoknowm (link)
├• 📌 /tiktokmp3 (link)
├• 📌 /ytmp4 (link)
├• 📌 /ytmp3 (link)
├• 📌 /ytshorts (link)
├• 📌 /apkdownload (package)
├• 📌 /mediafire (link)
│
├• *INTERNET*
├• 📌 /gitclone (url<>repo)
├• 📌 /whoisip (ip<>address)
├• 📌 /shortlink (url)
├• 📌 /getidchat
├• 📌 /getidgroup
├• 📌 /toaudio (text)
│
├• *STALKER*
├• 📌 /stalkgithub (username)
├• 📌 /stalkinstagram (username)
├• 📌 /stalktiktok (username)
├• 📌 /stalktwitter (username)
│
├• *RANDOM ANIME*
├• 📌 /anime
├• 📌 /waifu
├• 📌 /husbu
├• 📌 /neko
├• 📌 /shinobu
├• 📌 /megumin
│
├• *RANDOM IMAGE*
├• 📌 /darkjoke
├• 📌 /memeindo
├• 📌 /meme
├• 📌 /patrick
├• 📌 /profil
│
├• *CREATOR / OWNER*
├• 📌 /ping
├• 📌 /restart
├• 📌 /getip
├• 📌 /sendnotify (tel<>id|mess)
├• 📌 /banned (tel<>id)
├• 📌 /unbanned (tel<>id)
│
├• *SUPPORT CREATOR*
├• 📌 /owner
├• 📌 /donasi
├• 📌 /rules
├• 📌 /script
├• 📌 /buysourcecode
│
╰❑ 「 *THANK YOU* 」
`
var button = [
    [{
        text: 'Next ⏭',
        callback_data: 'menu2cmd*' + user_id
    }]
]
neko.replyWithPhoto({
    source: thumbnail
}, {
    caption: menu,
    parse_mode: "MARKDOWN",
    disable_web_page_preview: true,
    reply_markup: {
        inline_keyboard: button
    }
})
}

exports.menu2 = async (neko, pushname, thumbnail) => {
    var menu = `
_Hello Sis ${pushname} 👋_

╭──❒ 「 *ADVANCED MENU* 」
│
├• *INFORMATION*
├• 📌 /earthquake
├• 📌 /weather (city)
│
├• *INTERNET*
├• 📌 /translate (text)
├• 📌 /fetch (endpoint)
│
├• *IMAGE MAKER*
├• 📌 /write (text)
├• 📌 /qrcode (text)
├• 📌 /diffusion (text)
│
├• *JAIL TOOL*
├• 📌 /spam (tel<>id|count|mess)
│
├• *CREATOR / OWNER*
├• 📌 /broadnotif (text)
├• 📌 /listuser
├• 📌 /listbanned
├• 📌 /getcase (casename)
│
╰❑ 「 *THANK YOU* `
neko.replyWithPhoto({
    source: thumbnail
}, {
    caption: menu,
    parse_mode: 'MARKDOWN'
})
}

exports.donasi = async (neko, donasi) => {
    neko.replyWithPhoto({
        source: donasi
    }, {
        caption: '_Scan this QR CODE to get the BTC address, then make a donation according to the amount you want._',
        parse_mode: 'MARKDOWN'
    });
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});