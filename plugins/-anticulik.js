let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Dana*: 082331243615
• *Telkomsel:* 6282331243615

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/heroasta

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282331243615', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler
