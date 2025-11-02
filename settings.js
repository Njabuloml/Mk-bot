/* ═════════════════════════════════
 *  🚀  MALVIN KING TECH - YT
 * ═════════════════════════════════
 *  
 *  📺  YouTube    : https://www.youtube.com/@malvintech2
 *  💻  GitHub     : https://github.com/XdKing2
 *  🌐  Website    : Coming Soon
 *  🪀  WhatsApp  : https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S
 *  
 *  👨‍💻  Developer  : Malvin King
 *  📧  Contact    : Available on GitHub
 *  
 *  ⚠️   Please do not remove this watermark
 * ═════════════════════════════════
 *  © 2025 Malvin Tech - All Rights Reserved
 * ════════════════════════════════ */

const fs = require('fs')
const chalk = require('chalk')

//———————[ Owner Config ]——————————//

global.ownernumber = '27795703490' // Change to your number
global.ownername = 'ᴍᴀʟᴠɪɴ ᴋɪɴɢ' // add ur name
global.botMode ='public' // change to public or self

//————————[ Bot Config ]—————————//

global.SESSION_ID = "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tIeEVGR2lQQ2hnSVBodXBBYWJraGZBVXRlaUd5cncyVnVvOERqL0sxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnZwaWNCUi8yS0xhZkpDNTh5TGpZRi93S2tMRWxmNVAzWDZiSnhUaXpqUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RGdWUnM2d3NTY2JJNVp1NlB4L1p6RUI2Rm5uU0swMGJGRTMxd2k2eTJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdGRiL2UvdEFRRVFnRjg1a2tlN1MwNFViMWFOd2xqV0xQMnBwSy9XOURBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CNDJuL3hlN0gxZGhtV0xVd1lMd2xMcHA5dGdEbEpYRWpOMk9xbjBGblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFWjMvRUl6dTRQR1ZJSFZIbVRIb3o4ZGZpVlNQeitvbURZUEhKeGlueUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhWdDFJYXhXVHJQTkczN0h0MjBFOGpYZXVFSWRtMjVyL24zN3h3UmVGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialo5U29Ra0M2YzRIYjdFVTJDN2VlbWtlWEh1UGlQeWIwQmg4TVpGU1hRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJwMTJBQ1hMbXp0ZldIM2dndmJqdmFIK0s3UHdrb2x4b25yL3llVGtQc2l4U3hINURGRkRRclk3S0NkT0gzWi9ZV0llejRzRWdmeGNxZURydys2aERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJaZXdXTlV2NU13WkpFOEx6THRSTUlJWXpjL29OWHpkWW1WLytXa1RaVnRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4TWN1YWZwSlJsLXpWdUhWSVVoNzlBIiwicGhvbmVJZCI6IjJhM2YxMGM4LTE5YTItNDA1YS1iODIxLThiYWYzNGQ0MjIyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMVBEZG9aYjFHNU9SU28zRHFBcnFOUTdPNGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTg1Qjh5a1E5SWJkMVN6cW9MWURKQkRBQnNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNzc5NTcwMzQ5MDo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDI3NDgzOTY3NDA4MTQ6OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2WnE4c0VFTVhYbmNnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndHSU94UDBsTXJscjJUSnI3YTE1cnFrRlBQUDJibTB0QUo3cTJkUElqV3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFCc3p6N2NxM1dSdjlWTnBTT21BaHNHRmxGUnJyTGxDMzZPRXIvSzFhNUF4N213WDVXMnhhaFc1UWx5YWo5M3FQeTdqbHlERlFYbkJINTFqa0NFY0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3clo4eDRwVjdWWTIzdjl2TVhJZXZNa3FBSnY1QmJDY0xYYS9FOE42NTJUdm5CWXduaG5KMnZZRDIwTk9xM3lVYnI0Y3lrZ0tNbzFyaHBLVzJqa2FDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3Nzk1NzAzNDkwOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0JpRHNUOUpUSzVhOWt5YSsydGVhNnBCVHp6OW01dExRQ2U2dG5UeUkxcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMDk0MDM2fQ=="; // add ur session id starts with starcore~
global.namabot = "ᴍᴋ-ʙᴏᴛ"
global.nomorbot = '263714757857' // Change to yourbot number
global.pair = "MRMALVIN"
global.version = '1.0.1'
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————[ Social Media Config ]———————//
global.web = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.linkSaluran = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.idSaluran = "120363402507750390@newsletter"
global.nameSaluran = "Malvin Tech Ch."

//————————[ Watermark Config ]———————//
global.packname = 'Stick By Mk'
global.author = 'YT Malvin King Tech'
global.foother = 'Made By Malvin King'


//———————[ Media Config ]—————————//
global.img = "https://files.catbox.moe/641pvo.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/641pvo.jpg"
global.thumb = [ 
    "https://files.catbox.moe/641pvo.jpg",
    "https://i.ibb.co/Z1zG8ndV/malvin-xd.jpg"

]

//—————[ Broadcast Config ]——————————//
// Delay Jpm & Pushctc || 1000 = 1 second
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave M-K"

//——————[ Message Config ]——————————//
global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ʏᴇᴛ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ, ᴘʀᴏᴄᴇssɪɴɢ...',
}

// *** message *** 
global.closeMsgInterval = 30; // 30 minutes. maximum 60 minutes, minimum 1 minute
global.backMsgInterval = 2; // 2 hours. maximum 24 hours, minimum 1 hour

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
