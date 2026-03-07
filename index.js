const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys")

async function startBot() {

const { state, saveCreds } = await useMultiFileAuthState("auth")

const sock = makeWASocket({
auth: state
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("connection.update", (update) => {

const { connection } = update

if(connection === "open") {
console.log("Bot conectado ao WhatsApp")
}

if(connection === "close") {
console.log("Reconectando...")
startBot()
}

})

}

startBot()
