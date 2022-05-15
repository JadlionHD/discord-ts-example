import { Message } from "eris";
import { IClient } from "../structures/Client";
import IEvent from "../structures/Event";

export default class InteractionEvent extends IEvent {
  constructor(bot: IClient) {
    super(bot);
    this.name = "messageCreate";
  }
  public run(bot: IClient, msg: Message) {
    console.log("Received Message: ", msg.id);
  }
}
