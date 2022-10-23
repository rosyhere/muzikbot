module.exports = {
  name: "geç",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
      return message.channel.send("bi ses kanalına gir olum");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("atlanabilecek şarkı yok");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("Şarkıyı geçtim");
  }
};

