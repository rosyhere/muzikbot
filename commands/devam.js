module.exports = {
  name: "devam", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
   
      return message.channel.send("olum ses kanalına gir");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('bulamadık api')
    if(serverQueue.playing) return message.channel.send(`duran bi şarkı yok piskopat`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("duraklatığım şarkıyı devamettiriyomsss") 
 }
    
    message.channel.send("Duraklattığım bir şarkı yok lan")
    
  }
}
