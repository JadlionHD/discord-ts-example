import { Client, ClientOptions, Collection } from "eris";
import { readdir, readdirSync } from "fs";

export class IClient extends Client {

	public readonly config;
	public commands;
	public aliases;
	constructor(token: string, options?: ClientOptions) {
		super(token, options);

		this.config = require("../config").config;
		this.commands = new Map();
		this.aliases = new Map();
		this._loadEvents(this);
		this._loadCommands();
	}

	private _loadCommands(): void {
		readdirSync("./dist/commands/").forEach(dir => {
			const commands = readdirSync(`./dist/commands/${dir}`).filter(file => file.endsWith(".js"));
			for(let file of commands) {
				//let nameDir = file.replace(".js", "").toLowerCase();
				
				let cmd = require(`../commands/${dir}/${file.replace(".js", "").toLowerCase()}`);
				let name = cmd.config.name;
				this.commands.set(name, cmd);
				if(cmd.config.aliases) {
					for(const alias of cmd.config.aliases) {
						this.aliases.set(alias, name);
					}
				}
			}
		})
	}

	private _loadEvents(client: Client): void {
		const read = readdirSync("./dist/events")
		for(const event of read) {
			const file = require(`../events/${event}`)
			client.on(file.name, (...args) => file.run(client, ...args));
		}
	}
}