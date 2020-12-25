import { ErisClient } from "./structures/Client";
import "dotenv/config";
import { clientOptions } from "./config"

const client = new ErisClient(process.env.DISCORD_TOKEN!, clientOptions);

client.connect();