import { Client, ClientOptions, Collection, Constants } from "eris";
import { readdir, readdirSync } from "fs";
import Config from "../config";
import { ConfigType, ICommandType } from "../types";

export class IClient {
  public readonly config: ConfigType;
  public commands: Map<string, ICommandType>;
  public client: Client;
  public token: string | undefined;
  constructor(token: string, options?: ClientOptions) {
    this.config = Config;
    this.commands = new Map();
    this.client = new Client(token, this.config.clientOptions);
    if (!token) throw new Error("Token must be required!");
  }

  public start(): void {
    console.log("Starting bot...");
    this._loadCommands();
    this._loadEvents();
    this.client.connect();
    setTimeout(async () => {
      (await import("./SlashHandle")).run(this);
    }, 5 * 1000);
  }
  private _loadCommands(): void {
    readdirSync(`${__dirname}/../commands`).forEach(async (fileName) => {
      let file = await import(`../commands/${fileName.replace(".js", "")}`);
      let initFile = new file.default();
      this.commands.set(initFile.commandOpts(Constants).name, initFile);
    });
  }

  private async _loadEvents(): Promise<void> {
    const read = readdirSync(`${__dirname}/../events`);
    for (const event of read) {
      let file = await import(`../events/${event.replace(".js", "")}`);
      let initFile = new file.default();
      this.client.on(initFile.name, (...args) => initFile.run(this, ...args));
    }
  }
}
