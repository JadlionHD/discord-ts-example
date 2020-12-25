import { Client, Message } from "eris";
import { config } from "../config";

module.exports = async (client: Client, msg: Message) => {
    if(msg.author.bot) return;

    const customPrefix = config.PREFIX;
    if(!msg.content.startsWith(customPrefix)) return;

    let args: any = msg.content.slice(customPrefix.length).split(' ');
    let command: string = args.shift().toLowerCase();

    if(command === "ping") {
        msg.channel.createMessage("Hello world");
    }
}