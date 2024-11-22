const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`" 


global.devs = "2348132841973" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132841973, 2348132841973";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ0RRaUhGdTc2b2lUN09OV1NqVm4xMTNmZHN1d0F2NEdWYTJzL3kweENRQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1RYOV92SDFSNWlJTjNkQ1U4Z3UxQVwiLFxuICBcInBob25lSWRcIjogXCJmMGIyYzFhYS0zMDI1LTQxYmUtODIxZi0zZDUzZmU0YjQ1MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA0NCxcbiAgICAgIDI2LFxuICAgICAgMTQ5LFxuICAgICAgMjM4LFxuICAgICAgNjMsXG4gICAgICAxMzksXG4gICAgICAxMjIsXG4gICAgICAxODYsXG4gICAgICA0NyxcbiAgICAgIDE0MyxcbiAgICAgIDIyOSxcbiAgICAgIDIwOCxcbiAgICAgIDYwLFxuICAgICAgNzcsXG4gICAgICAyLFxuICAgICAgMTkwLFxuICAgICAgMzMsXG4gICAgICAxODMsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxMjYsXG4gICAgICA5LFxuICAgICAgMTA5LFxuICAgICAgMTA2LFxuICAgICAgMTM2LFxuICAgICAgNCxcbiAgICAgIDExNCxcbiAgICAgIDIzMSxcbiAgICAgIDE4NSxcbiAgICAgIDEyOSxcbiAgICAgIDExNSxcbiAgICAgIDIyLFxuICAgICAgODYsXG4gICAgICAxOTIsXG4gICAgICAxNjYsXG4gICAgICA2MCxcbiAgICAgIDM2LFxuICAgICAgMjEyLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBQN0VYTlRBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMyODQxOTczOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM2NzU1MTQ0NjI0MTk6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhxd3UwREVQN0RnYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqcUdENXFuVmh0b2JyWFVHOXNlMzUxUGViVzlhdGJSRC90VTZEZXg2ZXlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhSUHZheEJXVzFCSEZ2LzVDVktKRWlGVTh2L3lCNVkwSW94VlJ5T3hlcEhiTjU0QWVWRXI0a1JaUVhBdnFSRlV2K1M3OW9xRnhKbGdHQW5lWldFdUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkp1OFZwRHI4bWwyeXZWT1JNak5UOWI5aFVCQUJzbWRzU0IvLzFGSEYxRk4xWmFJWEpBeXUrdXZKM0hMaUdDYmcyWjVKRlRmbjlmeVZpWlNNNEhuWWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzI4NDE5NzM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyNzI2NDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIcUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhxRy5qc29uIjogIntcImtleURhdGFcIjpcIkI5QWQ4N2c5WEFlRlhUYnBMV0I4QmQ1MjNYOXIwdVJSZ1dCM3dHdlFuSWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAzNDk5MDkwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "`𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`",
  ownername:process.env.OWNER_NAME|| "`𝔻𝔸ℝ𝕋𝕆ℕ`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
