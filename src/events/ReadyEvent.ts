import { IClient } from "../structures/Client";

module.exports = {
	name: "ready",
	run: async function(client: IClient): Promise<any> {
		console.log(`${client.user.username} Ready!`)
	}
}
