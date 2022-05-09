import { IClient } from "./structures/Client";
import "dotenv/config";
import config from "./config";

const client = new IClient(process.env.DISCORD_TOKEN, config.clientOptions);

client.start();
