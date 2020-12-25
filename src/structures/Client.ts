import { Client, ClientOptions, Collection } from "eris";
import { readdir, readdirSync } from "fs";

let nested_folder: string[] = ["Anime", "Fun", "Growtopia", "Info", "Support", "Utility", "Moderation"];
//let nested_folder: string[] = ["Testing", "Support"];

export class ErisClient extends Client {

	public readonly config = require("../config");
	public constructor(token: string, options?: ClientOptions) {
		super(token, options);

		this._loadEvents(this);
	}

	public async _loadEvents(client: Client) {
		const read = readdirSync("./dist/events")
		for(const event of read) {
			const file = require(`../events/${event}`)
			client.on(event.split(".")[0], (...args) => file(client, ...args));
		}
	}
}