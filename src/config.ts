import { ClientOptions } from "eris";

export const clientOptions: ClientOptions = {
	maxShards: 'auto',
	messageLimit: 0,
	getAllUsers: false,
	allowedMentions: {
		everyone: false,
		roles: true,
		users: true
	},
	disableEvents: {
		TYPING_START: true,
		VOICE_STATE_UPDATE: true,
	}
}

export const config = {
	"TOKEN": `${process.env.DISCORD_TOKEN}`,
	"PREFIX" : "hi!",
	"ownerID": ["421307985827201024", "540560193277132800", "494219204610883594"],
	"colors": {
		"error": 0xFF0000,
		"green": 0x00FF46,
		"success": 0xC0C0C0,
		"warning": 0xFFD100
	}
}