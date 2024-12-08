/**
 * Source Code By AlichaMD
 * Don't Forget Smile
 * This Bot Telegram Using Api Official
 * Thank You
 */

require("./configuration/config")
const fs = require("fs");
const chalk = require("chalk");
const os = require("os");
const speed = require('performance-now');
const figlet = require("figlet");
const { neko_bot } = require("./myfunc/function")
const { Telegraf } = require("telegraf");
const qrcode = require("qrcode-terminal");

global.api = (name, path = "/", query = {}, apikeyqueryname) =>
  (name in global.APIs ? global.APIs[name] : name) +
  path +
  (query || apikeyqueryname
    ? "?" +
    new URLSearchParams(
      Object.entries({
        ...query,
        ...(apikeyqueryname
          ? {
            [apikeyqueryname]:
              global.APIKeys[
              name in global.APIs ? global.APIs[name] : name
              ],
          }
          : {}),
      })
    )
    : "");
    

    if (BOT_TOKEN == '7798008427:AAG0MVYk_RVjTDnTmVkYrKVN88B8e_UCZ3U') {
      return console.log(LANGUAGE_IND.noToken)
    }

    const bot = new Telegraf(BOT_TOKEN)
    async function startneko() {
      console.log(
        neko_bot.color(
          figlet.textSync("Neko - Bot", {
            font: "Standard",
            horizontalLayout: "default",
            vertivalLayout: "default",
            whitespaceBreak: false,
          }),
          "cyan"
        )
      );
      const query_split = '*'
      bot.on('callback_query', async (neko) => {
        //console.log(neko)
        action = neko.callbackQuery.data.split(query_split)
        args = action
        user_id = Number(action[1])
        if (neko.callbackQuery.from.id != user_id) return neko.answerCbQuery('Uppss... this button not for you!', {
          show_alert: true
        })
        const timestampi = speed();
        const latensii = speed() - timestampi
        const user = neko_bot.getUserName(neko.callbackQuery.from)
        const pushname = user.full_name;
        const username = user.username ? user.username : "unknown";
        const isCreator = [neko.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(user.username ? user.username : "-")
        const reply = async (text) => {
            for (var x of neko_bot.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await neko.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        try {
          switch (action[0]) {
            case "ownercmd": {
              await neko.sendContact(OWNER_NUMBER, OWNER_NAME)
              reply(`This owner [${OWNER_NAME}](${OWNER[0]}) 👑`)
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
              reply(LANGUAGE_IND.mess.wait)
              const image_url = api('btc', '/randomanime/' + action[0], {}, 'apikey')
              var button = [
                [{
                  text: 'Next ⏭',
                  callback_data: action[0] + 'cmd*' + user_id
                }]
              ]
              neko.replyWithPhoto({
                url: image_url
              }, {
                caption: 'Successfull Generate ' + action[0].replace('anime', 'Anime').replace('waifu', 'Waifu').replace('husbu', 'Husbu').replace('neko', 'Neko').replace('shinobu', 'Shinobu').replace('megumin', 'Megumin'),
                parse_mode: "MARKDOWN",
                disable_web_page_preview: true,
                reply_markup: {
                  inline_keyboard: button
                }
              })
            }
            break
            case "darkjoke": case "memeindo": case "meme": case "patrick": case "profil": {
              reply(LANGUAGE_IND.mess.wait)
              const image_url = api('btc', '/randomimage/' + action[0], {}, 'apikey')
              var button = [
                [{
                  text: 'Next ⏭',
                  callback_data: action[0] + '*' + user_id
                }]
              ]
              neko.replyWithPhoto({
                url: image_url
              }, {
                caption: 'Successfull Generate ' + action[0].replace('darkjoke', 'Darkjoke').replace('memeindo', 'Memeindo').replace('meme', 'Meme').replace('patrick', 'Patrick').replace('profil', 'Profil'),
                parse_mode: "MARKDOWN",
                disable_web_page_preview: true,
                reply_markup: {
                  inline_keyboard: button
                }
              })
            }
            break
            case "allmenucmd": {
              LANGUAGE_IND.allmenu(neko, pushname, THUMBNAIL)
            }
            break
            case "menu2cmd": {
              LANGUAGE_IND.menu2(neko, pushname, THUMBNAIL)
            }
          }  
        } catch (e) {
          console.log(e)
        }
      })
      bot.command('help', async (neko) => {
        user = neko_bot.getUserName(neko.message.from)
        await neko.reply(LANGUAGE_IND.first_chat(BOT_NAME, user.full_name), {
          parse_mode: "MARKDOWN",
          disable_web_page_preview: true,
          reply_markup: {
            inline_keyboard: [
              [{
                text: 'Script',
                url: "https://github.com/alichadevv/Neko-MD-Tele"
              }, {
                text: 'Creator',
                url: OWNER[0]
              }]
            ]
          }
        })
      })
      bot.command('start', async (neko) => {
        user = neko_bot.getUserName(neko.message.from)
        await neko.reply(LANGUAGE_IND.first_chat(BOT_NAME, user.full_name), {
          parse_mode: "MARKDOWN",
          disable_web_page_preview: true,
          reply_markup: {
              inline_keyboard: [
                  [{
                      text: 'Script',
                      url: "https://github.com/alichadevv/Neko-MD-Tele"
                  }, {
                      text: 'Creator',
                      url: OWNER[0]
                  }]
              ]
          }
      })
  })
  bot.on('message', async (neko) => {
    require("./nekobot")(neko, bot);
  })
  bot.launch({
    dropPendingUpdates: true
  })
  bot.telegram.getMe().then((getme) => {
    console.table({
      "Bot Name": getme.first_name,
      "Username": "@" + getme.username,
      "Id": getme.id,
      "Link": "https://t.me/" + getme.username,
      "Author": OWNER[0]
    })
    console.log(neko_bot.bold.color('Print Bot Token...', 'cyan'))
    qrcode.generate(BOT_TOKEN ? BOT_TOKEN : 'Unknown', {small: true});
  })
}
startneko()
  
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
