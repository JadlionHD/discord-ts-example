import { IClient } from "../structures/Client";
import IEvent from "../structures/Event";

export default class ReadyEvent extends IEvent {
  constructor(bot: IClient) {
    super(bot);
    this.name = "ready";
  }
  public run(bot: IClient) {
    console.log(`${bot.client.user.username} Ready!`);
  }
}
