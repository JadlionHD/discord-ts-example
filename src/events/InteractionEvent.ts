import { IClient } from "../structures/Client";
import IEvent from "../structures/Event";
import Eris from "eris";
import { ICommandInteraction } from "../types";

export default class InteractionEvent extends IEvent {
  constructor(bot: IClient) {
    super(bot);
    this.name = "interactionCreate";
  }
  public run(bot: IClient, interaction: ICommandInteraction) {
    if (interaction instanceof Eris.CommandInteraction) {
      bot.commands.get(interaction.data.name)?.run(bot, interaction);
    }
  }
}
