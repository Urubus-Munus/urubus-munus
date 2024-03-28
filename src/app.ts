import {
  Client,
  DMChannel,
  GatewayIntentBits,
  TextChannel,
  bold,
  hyperlink,
} from 'discord.js';
import { schedule } from 'node-cron';
import { env } from './env';

const discordClient = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds],
});

discordClient.login(env.TOKEN_BOT);

async function test() {
  const isDevelopment: boolean = env.NODE_ENV === 'dev';
  console.log(isDevelopment);
  const channel = discordClient.channels.cache.get(
    isDevelopment
      ? env.ID_DISCORD_TEST_SERVER_CHANNEL
      : env.ID_DISCORD_SERVER_CHANNEL,
  );
  const bodyContent = `
  ${bold('Vagas de empregos!')}
  ${hyperlink('teste', 'http://localhost')}
  `;

  if (
    (channel && channel instanceof TextChannel) ||
    channel instanceof DMChannel
  ) {
    channel.send(bodyContent);
  }
}

discordClient.on('ready', () => {
  console.log(
    `Bot started, now connected to Discord server as ${discordClient.user?.tag}`,
  );
  test();
  schedule('10 * * * * *', test);
});
