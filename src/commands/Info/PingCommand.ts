import { Client, Message } from "eris";
import { IClient } from "../../structures/Client";

exports.run = async function(client: IClient, msg: Message, args: string[]): Promise<any> {
	msg.channel.createMessage("hai")
}

exports.config = {
	name: "ping",
	aliases: []
}
