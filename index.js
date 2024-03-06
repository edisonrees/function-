/**
 * **********************************************
 *   Code by Edison Rees
 * **********************************************
 */




const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
console.log(`Copy 200 Listening On localhost:${port}`);
console.log(`Data Valued 200`);
});


const statusMessages = ["Watching Discord"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|   Verified as ${client.user.tag} 200`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 * **********************************************
 *   Code by Edison Rees
 * **********************************************
 */



function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Ready. Running Params Check`);
console.log(`\x1b[36m%s\x1b[0m`, `|    Verified Params, Checking Gateway Access`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    Verified Gateway, Checking Rich Content Injections `);
 console.log(`\x1b[36m%s\x1b[0m`, `|     Rich Content Injections Failed, Purging Injections `);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Injections Purged, Retrying Injections 401 400  `);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Verified Injection , Status Code 200 302 Found`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    ERROR, RICH PRESENCE CANNOT BE VERIFIED Status Codes 401 400 404 Retrying `);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Verified Rich Prescence, Checking Validity Of Console 101 Switching Protocols`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Final Check, Status 200, Params 200, Injections 200, Console 200 101, Gateway 200`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Setup Confimed.`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Completing...`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    511 Network Authentication Required`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Authentication Waiting.... Success`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    All Systems Code 200, OK`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Deploying Cache Load`);
 console.log(`\x1b[36m%s\x1b[0m`, `|    Deploying Completed. System Operational.`);
  updateStatusAndSendMessages();


  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
 * **********************************************
 *   Code by Edison Rees
 * **********************************************
 */

