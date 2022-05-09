import { IClient } from "../structures/Client";
import IEvent from "../structures/Event";

export default class ErrorEvent extends IEvent {
  public name: string;
  constructor(bot: IClient) {
    super(bot);
    this.name = "error";
  }
  public run(bot: IClient, err: Error, id: number) {
    console.log(`Shards ${id} error`, "error", err);
  }
}
