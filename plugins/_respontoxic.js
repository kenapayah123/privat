import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let info = `

*--- SOURCE CODE ---*
* | Script Private | Mau Buy? Silahkan Hubungi Owner!*

*--- OFFICIAL GROUP ---*
_https://chat.whatsapp.com/HAZ6yFgCafUAeDbNH33IrL_

*--- YOUTUBE OFFICIAL ---*
_https://youtu.be/pwLZpdfO8AU_
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Script By ᴹᴿ᭄ King Of Bear ×፝֟͜× | Buy? 50K No Enc*', 'status@broadcast')
}
handler.help = ['sc', 'sewasc']
handler.tags = ['info', 'main']

handler.command = /^(sc|script|sewasc)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
//*
