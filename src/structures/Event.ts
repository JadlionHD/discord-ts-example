import { IClient } from "./Client";

export default class IEvent {
  public name: string | undefined;
  constructor(bot: IClient) {}
  public run(bot: IClient, ...args: any) {}
}
