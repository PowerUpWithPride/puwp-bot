# Janets

based off oliviacpu's Janets:

"I made a Discord bot but it's Janet.
Maybe other Janets later."

## Prerequisites

You'll need:
 - A [Discord account](https://discordapp.com/register)
 - Permission to add accounts to a server, or your own server

## Steps to set up:

1. Create an App here: [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)
2. Create an App Bot User for your App by clicking "Create a Bot User"
3. Add the App Bot User to your Discord server using this link: `https://discordapp.com/oauth2/authorize?&client_id=<CLIENT ID>&scope=bot&permissions=0` replacing `<CLIENT_ID>` with the Client ID found on the page of your App
4. Set the `DISCORD_BOT_ID` value in `.env` using the Bot User token ("click to reveal" in the App page under the bot username)

## The code
Check out `server.js` to see how it works ✨
We're using the [Eris](https://npm.im/eris) library to interact with the Discord API.
`Dockerfile` is for the `docker` container build.
`puwp-bot.service` is for `systemd`, assuming you are using the Docker container, and it is already created and named `puwp-bot`.

## Contributing

If you're in the Discord then ask me to invite you to edit this
