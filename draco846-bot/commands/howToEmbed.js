const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "howtoembed",
  description: "how to embed",
  execute(msg, args) {
    const embed = new MessageEmbed(msg, {})

    msg.channel.send(embed);
  },
};
