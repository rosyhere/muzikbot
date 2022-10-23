module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("bi ses kanalına gir ben bi çömdürp geliyom");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("bulamıyom amk");
    }
    
    message.channel.send(serverQueue.songs[0].title + 'budur da')

    
    
    
  }
}