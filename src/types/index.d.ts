import { AutocompleteInteraction, Client, ClientOptions, CommandInteraction, Constants, MessageInteraction } from "eris";
import Config from "../config";

export interface IClientType {
  config: object;
  commands: Map<string, object>;
  client: Client;
  config: Config;
  token: string;
  _loadCommands: () => void;
  _loadEvents: () => void;
}

export interface ICommandType {
  commandOpts(constant: Constants): ICommandOpts;
  run(bot: IClient, interaction: CommandInteraction): void;
}

export interface ICommandOpts {
  name: string;
  description: string;
  type: number | any;
}

export interface ConfigType {
  botOptions: {
    prefix: string;
    ownerID: string[];
    colors: {
      error: number;
      green: number;
      success: number;
      warning: number;
    };
    devMode: boolean;
  };
  clientOptions: ClientOptions;
}
