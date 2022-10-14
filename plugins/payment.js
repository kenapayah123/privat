import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/47708a62a9910c4e196bb.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕\n╭─「_• Pulsa •_」\n│ • Axis [083173904146]\n│ • Three [089508188642]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [0895419520808]\n│ • Gopay [0895419520808]\n╰────\n\n_◛˖ Ingin Donasi? Chat nomor owner_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
