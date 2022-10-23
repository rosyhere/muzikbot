const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
.setColor("07")
.setAuthor("TUZLUYARAK")                                            
.setDescription(
    `
 \`${PREFIX}oynat şarkı adı\` : **Bir Şarkıyı Oynatır.
 \`${PREFIX}geç\` : **Sıradaki Şarkıyı atlar.
 \`${PREFIX}döngü\` : **O Anki Şarkıyı Hep tekrarlar**
 \`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
 \`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
 \`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
 \`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**

`)
.setFooter(`31`)
                      )    
}
}
