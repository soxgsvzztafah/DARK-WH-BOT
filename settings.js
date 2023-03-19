/*

© 𝕋𝔼𝔸𝕄 𝔻𝔸ℝ𝕂 𝔻𝔼𝕍𝕀𝕃

*/

const fs = require('fs')
const chalk = require('chalk')


/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true "
global.READ_MASSAGE = true
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = false
//👇 Inbox massage block PM block
global.INBOX_BLOCK = true
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94703855412'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '𝘿𝙀𝙑𝙄𝙇 𝘽𝙊𝙏'
//👇 Your name
global.ownernma =  '' 
//👇 Sticker Author Name
global.packname =  '𝚃𝙴𝙰𝙼 𝙳𝙰𝚁𝙺 𝙳𝙴𝚅𝙸𝙻' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = '𝙱𝙻𝙾𝙲𝙺 !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '👨‍💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```📥𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝚂𝙾𝙽𝙶...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```📤𝚄𝙿𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝚂𝙾𝙽𝙶...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👹|🗨️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'SI'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://graph.org/file/a890f96edcaaec8b74f03.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Desable PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
//👇 Desable download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API
global.CHATGPT_API = ''
/*

   🍃 OTHER 🍃

*/
global.S_CAP = ''
global.V_CAP = ''
global.YT_CAP = ''
global.PORT = '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['94703855412'] //Change  it
global.premium = ['94703855412'] //Change it 
global.pengguna = 'DARK DEVIL' // Your name
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🤠'
global.weem = 'DARK DEVIL BOT''

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://graph.org/file/a890f96edcaaec8b74f03.jpg`
global.imgalive = fs.readFileSync('./Media/image/DarkDevil.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
