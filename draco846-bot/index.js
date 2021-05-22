require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands");
const prefix = "!";

Object.keys(botCommands).map((key) => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  console.log(msg.content);
  if (!msg.content.startsWith(prefix)) {
    return;
  }


  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) {
    return;
  }

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("There was an error trying to execute that command!");
  }
});


bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
