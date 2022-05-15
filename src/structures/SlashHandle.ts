import { Constants } from "eris";
import { IClient } from "./Client";

export function run(bot: IClient): void {
  let guildID: string = "617041217951236291";
  if (bot.config.botOptions.devMode) {
    bot.client.getGuildCommands(guildID).then((res) => {
      bot.commands.forEach((cmd) => {
        let cmdOpts = cmd.commandOpts(Constants);
        let slashCmd = res.find((f) => f.name === cmdOpts.name);
        console.log(slashCmd);
        // gk bs bikin command baru untuk sementaraW
        // if (slashCmd !== undefined) {
        //   bot.client.createGuildCommand(
        //     guildnya,
        //     bot.commands.get(cmd.name).commandOpts(Constants)
        //   );
        // }
        bot.client.createGuildCommand(guildID, bot.commands.get(cmdOpts.name)?.commandOpts(Constants));
      });
    });
  }
}
