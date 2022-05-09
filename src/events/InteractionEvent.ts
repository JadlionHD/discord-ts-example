import { IClient } from "../structures/Client";
import IEvent from "../structures/Event";
import Eris from "eris";

export default class InteractionEvent extends IEvent {
  constructor(bot: IClient) {
    super(bot);
    this.name = "interactionCreate";
  }
  public run(
    bot: IClient,
    interaction: Eris.CommandInteraction | Eris.PingInteraction | Eris.ComponentInteraction | Eris.AutocompleteInteraction | Eris.UnknownInteraction
  ) {
    if (interaction instanceof Eris.CommandInteraction) {
      bot.commands.get(interaction.data.name).run(bot, interaction);
    }
  }
}
