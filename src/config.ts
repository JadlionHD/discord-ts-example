import { ConfigType } from "./types";

const config: ConfigType = {
  botOptions: {
    prefix: "hi!",
    ownerID: ["421307985827201024"],
    colors: {
      error: 0xff0000,
      green: 0x00ff46,
      success: 0xc0c0c0,
      warning: 0xffd100
    },
    devMode: true
  },
  clientOptions: {
    maxShards: "auto",
    messageLimit: 0,
    getAllUsers: true,
    allowedMentions: {
      everyone: false,
      roles: true,
      users: true
    },
    disableEvents: {
      TYPING_START: true,
      VOICE_STATE_UPDATE: true
    },
    intents: ["guildMembers", "guildMessages", "guildEmojis", "guilds"]
  }
};

export default config;
