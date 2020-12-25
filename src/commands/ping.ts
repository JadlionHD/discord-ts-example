import { Client, Message } from "eris";

exports.run = function(client: Client, msg: Message, args: string) {
	msg.channel.createMessage(`Pong!`).then(e => {
		setTimeout(() => {
			e.edit(`Pong! ${e.timestamp - msg.timestamp}ms`)
		}, 2 * 1000)
	})
}