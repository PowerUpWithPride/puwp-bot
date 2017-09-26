const Eris = require("eris");

const client = new Eris.CommandClient(
  process.env.DISCORD_BOT_TOKEN,
  {},
  {
    description: "PUWP Bot",
    owner: "arael",
    prefix: "."
  }
); // https://abal.moe/Eris/docs/CommandClient

client.on("ready", () => {
  // Janet exists
  console.log("Bing!");
  // Hang out in `channel` and turn off the mic indicator
  // client.joinVoiceChannel('voicechannelid', {}).then(voice => voice.stopPlaying())
});

// The one command we have that is reliable
/*client.registerCommand("bot", (msg) => {
  client.createMessage(msg.channel.id, 'Hi, I\'m Bot!')
  msg.addReaction("✨")
}, {
   description: "Summon Bot",
   fullDescription: "Hi, I'm Bot!"
})*/

client.registerCommand(
  "commentator",
  msg => {
    msg.addReaction("✨");

    console.log(msg.content);

    var rolls = msg.member.roles;
    console.log(rolls);

    if (msg.member.roles.indexOf(process.env.RUNNER_ROLE_ID) > -1) {
      msg.channel.guild.members.forEach(function(member) {
        msg.mentions.forEach(function(element) {
          if (member.user == element) {
            msg.channel.guild.addMemberRole(
              member.id,
              process.env.COMMENTATOR_ROLE_ID
            );
            console.log("added commentator");
            client.createMessage(
              process.env.RUNNERS_CHANNEL_ID,
              "Added commentator: " + element.username
            );
            return true;
          }
        });
      });
    }
  },
  {
    description: "Add commentator",
    fullDescription:
      "Add a commentator with this command by @-mentioning them in public (Runners Only)",
    argsRequired: true,
    deleteCommand: true
  }
);

/*
// Experimenting with other APIs
const imgur = require('imgur')
imgur.setClientId(process.env.IMGUR_CLIENT_ID)
const { random } = require('lodash')
client.registerCommand("cactus", (msg) => {
  imgur.search("cactus")
    .then((json) => {
      const cacti = json.data
      const cactus = cacti[random(0, cacti.length)]
      client.createMessage(msg.channel.id, `Here you go! ${cactus.link}`)
      msg.addReaction("🌵")
    })
    .catch((error) => {
      console.error("Janet couldn't find a cactus?", error.message)
    })

}, {
   description: "Summon a cactus",
   fullDescription: "Here you go!"
}) */

const https = require("https");

/*client.registerCommand('test', (msg) => {
    
  },
  {
    description: "Test",
    fullDescription: "Test"
  })
*/

// Need to figure out filter, permissions, etc. for purge
/*client.registerCommand("purge", (request) => {
  if (request.author.id === '153194092644270080') {
    request.channel.createMessage(`I'm erasing all the messages.`)
    request.channel.purge()
  }
}, {
   description: "Purge all messages from the channel this is posted in (OLIVIA ONLY)",
   fullDescription: "Purge all messages from the channel this is posted in (Only Olivia can use this right now)"
})*/

/*
// Need to figure out filter, permissions, etc. for purge
client.registerCommand("reboot", (request) => {
  if (request.author.id === '153194092644270080') {
    // Need to implement @emdantrim's idea for confirmation
    // Post a message mentioning the user and asking to react with a specific emoji
    // After seeing the emoji, delete the messages and post a confirmation emoji
    // This way state (who requested, did they confirm, are we done) is pretty much all in Discord
    
    // My broke stuff
    request.channel.createMessage(`I'm erasing <@${request.author.id}>'s messages from this channel, but other people will still remember.`)
    // Limit doesn't work? Filter doesn't work? https://abal.moe/Eris/docs/TextChannel#function-purge
    request.channel.purge(-1, (msg) => {
      console.log(msg.author.id)
      return msg.author.id === request.author.id
    })
  }
}, {
   description: "Purge all of your messages from the channel this is posted in (BROKEN)",
   fullDescription: "Purge all of your messages from the channel this is posted in (BROKEN)"
}) */

client.connect();

// Start an http server so the circle stops
// Might add some web functionality like invite requests, or other stuff
const express = require("express");
const http = require("http");

const app = express();

app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index");
});

app.use(function(request, response) {
  response.status(404).render("404");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
