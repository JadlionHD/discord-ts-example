import { IClient } from "./structures/Client";
import "dotenv/config";
import { clientOptions } from "./config"

const client = new IClient(process.env.DISCORD_TOKEN, clientOptions);

client.connect();