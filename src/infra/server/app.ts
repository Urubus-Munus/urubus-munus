import { env } from '@/env';
import { findAllJobs } from '@/functions/findAllJobs';
import { discordClient } from '../discordClient/config';

discordClient.login(env.TOKEN_BOT);

discordClient.on('ready', async () => {
  console.log(
    `Bot started, now connected to Discord server as ${discordClient.user?.tag}`,
  );
  findAllJobs();
});
