import { ApplicationCommandOptions, CommandInteraction, Constants } from "eris";
import { IClient } from "../structures/Client";
import ICommand from "../structures/Command";
import { ICommandInteraction } from "../types";

export default class PingCommand extends ICommand {
  constructor(bot: IClient) {
    super(bot);
  }
  public commandOpts(constant: Constants): ApplicationCommandOptions {
    return {
      name: "ping",
      description: "Test ping command",
      type: Constants.ApplicationCommandTypes.CHAT_INPUT
    };
  }
  public run(bot: IClient, interaction: ICommandInteraction): void {
    interaction.createMessage({
      content: "Ping"
    });
  }
}
