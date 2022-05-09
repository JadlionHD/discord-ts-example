import { IClient } from "./Client";

export default class IEvent {
  public name: string;
  constructor(bot: IClient) {}
  public run(bot: IClient, ...args: any) {}
}
