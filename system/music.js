
const ytdlDiscord = require("ytdl-core-discord");
const Discord = require('discord.js')
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send("bitti laaaaaaaaaaaaaaaaaaaaaaaan").catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("telifli lan bu açamıyorum telifliiiiii")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //100 yazan yeri ses düzeyini ayarlarsınız
    
    
    
      queue.textChannel.send(
        new Discord.MessageEmbed()
                                .setColor("01")
        .setAuthor('Oynatılıyor!')
        .setTitle(song.title)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
        .addField('▶ Kanal',song.author,true)
        .addField('▶ Videonun uzunluğu',song.duration,true)
        .addField('▶ Kaç lavuk izlemiş',song.wiews.toLocaleString(),true)
        .addField('▶ Kaç kişi beğenmiş',song.likes.trues,true)
      
                      

      
      )
    
    
  }
}
