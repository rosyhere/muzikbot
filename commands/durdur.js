module.exports = {
  name: "durdur",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("bi ses kanalına gir ben çömdürp geliyorum");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("durduracağım şarkı yok pezevenk");
    }
    if(!serverQueue.playing) return message.channel.send('Şarkı zaten durmuş mal')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("_siksike dom domda sikerim ananı toktoka")
  }  
  }
}