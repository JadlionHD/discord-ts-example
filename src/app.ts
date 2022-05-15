import { IClient } from "./structures/Client";
import "dotenv/config";
import config from "./config";

const token = process.env.DISCORD_TOKEN || "";
const client = new IClient(token, config.clientOptions);

client.start();
