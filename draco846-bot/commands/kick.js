module.exports = {
  name: "kick",
  description: "kick! member",
  execute(msg, args) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: <@${taggedUser.id}>`);
    } else {
      msg.reply("Please tag a valid user!");
    }
  },
};
