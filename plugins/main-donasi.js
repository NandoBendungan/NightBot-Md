let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
│ • *Axis:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Saweria:* https://saweria.co/NightNando
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ CREDITS', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 INSTAGRAM', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 GROUP BOT', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'MENU', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'OWNER', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
