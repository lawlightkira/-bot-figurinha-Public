const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")

async function startBot() {

const { state, saveCreds } = await useMultiFileAuthState("auth")

const sock = makeWASocket({
auth: state
})

sock.ev.on("creds.update", saveCreds)

console.log("Bot conectado ao WhatsApp")

}

startBot()
