import { CommandInteraction, Constants } from "eris";
import { ICommandOpts } from "../types";
import { IClient } from "./Client";

export default class ICommand {
  constructor(bot: IClient) {}

  public commandOpts(constant: Constants): ICommandOpts {
    return {
      name: "",
      description: "",
      type: 0
    };
  }
  public run(bot: IClient, interaction: CommandInteraction): void {}
}
