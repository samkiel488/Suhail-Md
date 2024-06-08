const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://samkiel.wapkiz.com"                       // put your app url here,
global.email ="samkiel488@gmail.com"
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/samkiel488/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IjmBfHNZ3Dk9XRi6gscabo";
global.website=process.env.GURL || "https://chat.whatsapp.com/IjmBfHNZ3Dk9XRi6gscabo" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ff910c6fe2d48c0d6c7b7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "SAMKIEL BOT" 


global.devs = "2348087357158" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348087357158";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ff910c6fe2d48c0d6c7b7.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing..." ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_08_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpVZTE5Slk0RW9WNG1lOXVFdEdWSUZTWWFzcE5uVXZFRlRuZmdnUS9FbnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFJbmFadW8yU09xSm9fMUVoUm54QVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAzNTcxNTUtY2Q3OC00YTgxLThjYmQtZjg2NDJmNzFiOGRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDI5LFxuICAgICAgMTg0LFxuICAgICAgMTE1LFxuICAgICAgMTY5LFxuICAgICAgMTcxLFxuICAgICAgMTY5LFxuICAgICAgMTM2LFxuICAgICAgMTQyLFxuICAgICAgODksXG4gICAgICA4NixcbiAgICAgIDE0OCxcbiAgICAgIDEyMSxcbiAgICAgIDg0LFxuICAgICAgMTQxLFxuICAgICAgMTk2LFxuICAgICAgMTI0LFxuICAgICAgMTc4LFxuICAgICAgMTQ3LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTg1LFxuICAgICAgMjYsXG4gICAgICAxMjUsXG4gICAgICAyMDIsXG4gICAgICA0LFxuICAgICAgMjQxLFxuICAgICAgMjU1LFxuICAgICAgMSxcbiAgICAgIDkzLFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICAxMTksXG4gICAgICAyMDksXG4gICAgICA0OCxcbiAgICAgIDM4LFxuICAgICAgMjIwLFxuICAgICAgMjUyLFxuICAgICAgMjQ5LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkEyNlE1NFE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc4NzE3MTExOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTc4NzE5Njc3NjY0NDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPeHJlNEdFTSt1aUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMng0WDdDbVRKM3d4cTdKMVhtSjVrQ052b2dybHZYamxvZnc0NUxpb3FtZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhMmt1ck9teEphSlROVU1GbEpFZWsxMW1xS1VMWGNTSzM1dEZLRmFiR0hvdGRjT0FIdmJpVFJ2RzcrWlFXRlFadktzTWJRSlF0Y2NiQS9saWh5cGNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3ZVVUSHhLY0VQL0lML0h2SUZiU3NoMGl4dlZLZUJlOGRoYXZZL2luM1ZRYzJydi96bWNkWTdqWXBRSUZzdUVEVFFVbUIyK25vK2tSUjdiSjNNQzRoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc4NzE3MTExOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzcwNDUzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1HNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUc1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTdsSDREd24wcU5qUmVIVnIwSXc2cUZGRDBQbXlVOVBycGIydVA4ZHIvdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQyMDQzMDI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "SAMKIEL BOT" ,
 
  author : process.env.PACK_AUTHER|| "EZEKIEL SAMUEL",
  packname: process.env.PACK_NAME || " EZEKIEL SAMUEL",
  botname : process.env.BOT_NAME  || "SAMKIEL BOT",
  ownernamE:process.env.OWNER_NAME|| "EZEKIEL SAMUEL",


  errorChat : process.env.ERROR_CHAT || "true",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
    HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SAMKIEL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages

//readcmds:process.env.READ_COMMANDS|| "false", 

//alwaysonline:process.env.WAPRESENCE|| "typing...", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
