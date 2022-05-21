import { Constants } from "eris";
import { IClient } from "./Client";

export function run(bot: IClient): void {
  let guildID: string = "617041217951236291";
  if (bot.config.botOptions.devMode) {
    // Creating command
    bot.commands.forEach((cmd) => {
      bot.client.createGuildCommand(guildID, cmd.commandOpts(Constants));
    });

    // Updating command
    bot.client.getGuildCommands(guildID).then((res) => {
      res.forEach((r) => {
        if (bot.commands.has(r.name)) {
          let cmd = bot.commands.get(r.name);
          console.log(`[UPDATE] Updating ${r.name}`);
          bot.client.createGuildCommand(guildID, cmd?.commandOpts(Constants));
        } else {
          console.log(`[WARNING] Deleting unused command: ${r.name}`);
          bot.client.deleteGuildCommand(guildID, r.id);
        }
      });
    });
  }
}
