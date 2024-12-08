/**
 * Source Code By AlichaDevv
 * Don't Forget Smile
 * This Bot Telegram Using Api Official
 * Thank You
 */

const fs = require("fs");
const chalk = require("chalk");
const { indonesia, english } = require("../src");

global.APIs = {
    btc: "https://api.botcahx.eu.org",
    lann: "https://api.betabotz.eu.org"
};

global.APIKeys = {
    "https://api.botcahx.eu.org": "hJ9RIPXz",
    "https://api.betabotz.eu.org": "JwUlCldG",
};

let http = require('http')
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    (global.ipserver = ip);
  })
})

global.LANGUAGE_IND = indonesia;
global.LANGUAGE_ENG = english;
global.KEY_OPENAI = "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";
global.BOT_TOKEN = "7798008427:AAG0MVYk_RVjTDnTmVkYrKVN88B8e_UCZ3U";
global.BOT_NAME = "Neko-Bot";
global.OWNER_NAME = "AlichaDevv";
global.OWNER_NUMBER = "6281400346604";
global.OWNER = ["https://t.me/AlichaIcha"];
global.OWNERID = '7277892050';
global.THUMBNAIL = "./src/thumb.png";
global.DONASI = "./src/donasi.png";
global.PRICE = "./src/price.png";


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});