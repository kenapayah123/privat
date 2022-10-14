import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {

    let sewa = `
         〔 llı OWNER ${namebot} ıll 〕
    
Nama: ${nameowner}
Umur: ${umurowner}
Asal: ${asalowner}

Nomor: ${nomorowner}

${botdate}
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, intro, [["Menu", usedPrefix + "menu"], ["Sewa Bot", usedPrefix + "sewa"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: '⚘ ᴄʀᴇᴀᴛᴇ ʙʏ ʀʏʜᴀʀ',          previewType: 0,
                        thumbnail: img1,
                        sourceUrl: sgh
            }
        }
    })
}
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
