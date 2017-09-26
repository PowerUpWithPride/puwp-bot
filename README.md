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

If it's working you should see "Bing!" in the logs!

I also added an `express` server and a couple of `pug` templates to serve so that the circle would stop spinning.

I'm still learning how bot actions and commands work.

A pattern I'm thinking about to add commands and supporting listeners is to have a function that takes the `CommandClient` and then does whatever `registerCommand` or `on('event')` listening it needs for the behavior or action there.

Kind of like how the bot actions in `oliviabot` work.

## Contributing

If you're in the Discord then ask me to invite you to edit this

## Things to do

These are some things I want to get Janet to do.

- [x] Hang out in Janet's Void
- [x] Prompt new members to introduce themselves
- [x] Sometimes find a cactus I guess
- [ ] Answer questions about how my Discord works
- [ ] Enforce rules?
- [ ] Coordinate things with friends?
- [ ] Allow members to manage friend invites?

Other things I want.

- [ ] Private web config (purge rules per channel, enable/disable commands?)