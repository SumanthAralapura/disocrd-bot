module.exports = {
  name: 'ping',
  description: 'Ping! latency of message',
  execute(msg, args) {
    const timeTaken = Date.now() - msg.createdTimestamp;
    const reply = `Pong! This message had a latency of ${timeTaken}ms.`;


    msg.reply(reply);
    // msg.channel.send('pong');
  },
};