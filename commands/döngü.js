module.exports = {
  name: "döngü",
  description: "",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
  
      return message.channel.send("bi ses kanalına gir artık");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Döngüye alacağım şarkı yok amk");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(` Döngü şimdi **${serverQueue.loop ? "Aktif " : "Deaktif"}**`)
    
    
    
    
  }
}