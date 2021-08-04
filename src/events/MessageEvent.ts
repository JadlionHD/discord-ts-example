import { Client, Message } from "eris";
import { IClient } from "../structures/Client";

module.exports = {
  name: "messageCreate",
  run: async function(client: IClient, msg: Message): Promise<any> {
    if(msg.channel.type === 1 || msg.author.bot) return;

    const customPrefix = client.config.prefix;
    if(!msg.content.startsWith(customPrefix)) return;

    let args = msg.content.slice(customPrefix.length).split(' ');
    let command = args.shift().toLowerCase();

    if(client.aliases.has(command))
      command = client.aliases.get(command);
    if(!client.commands.get(command)) return;

    try {
      await client.commands.get(command).run(client, msg, args);
    } catch(e) {
      console.log('ERROR', e.message, e.stack.split('\n'));
    }
  }
} 

