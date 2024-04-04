import { env } from '@env/index';
import { discordClient } from '@infra/discordClient/config';

const isDevelopment: boolean = env.NODE_ENV === 'dev';

export const discordChannel = () => {
  const discord = discordClient.channels.cache.get(
    isDevelopment
      ? env.ID_DISCORD_TEST_SERVER_CHANNEL
      : env.ID_DISCORD_SERVER_CHANNEL,
  );
  return discord;
};
