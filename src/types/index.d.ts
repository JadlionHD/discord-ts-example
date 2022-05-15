import { ApplicationCommandOptions, ApplicationCommandStructure, Client, ClientOptions, Constants } from "eris";
import Config from "../config";
import Erirs from "eris";

export interface IClientType {
  config: object;
  commands: Map<string, object>;
  client: Client;
  config: Config;
  token: string;
  _loadCommands: () => void;
  _loadEvents: () => void;
}

export type ICommandInteraction =
  | Eris.CommandInteraction
  | Eris.PingInteraction
  | Eris.ComponentInteraction
  | Eris.AutocompleteInteraction
  | Eris.UnknownInteraction;

export interface ICommandType {
  commandOpts(constant: Constants): ICommandOpts;
  run(bot: IClient, interaction: ICommandInteraction): void;
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
