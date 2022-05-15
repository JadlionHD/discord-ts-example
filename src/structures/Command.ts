import { ApplicationCommandOptions, CommandInteraction, Constants } from "eris";
import { IClient } from "./Client";

export default class ICommand {
  constructor(bot: IClient) {}

  public commandOpts(constant: Constants): ApplicationCommandOptions {
    return {
      name: "",
      description: "",
      type: 1
    };
  }
  public run(bot: IClient, interaction: CommandInteraction): void {}
}
