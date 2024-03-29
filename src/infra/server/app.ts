import { env } from '@/env';
import { DMChannel, TextChannel, hyperlink } from 'discord.js';
import { discordClient } from '../discordClient/config';
import { findAllJobsUseCase } from '../implementations/jobs';

// MELHORA ESSA FUNCAO
async function test() {
  const jobs = await findAllJobsUseCase.execute();
  const response = jobs.value?.jobs;

  if (!response) {
    return;
  }

  const isDevelopment: boolean = env.NODE_ENV === 'dev';
  const channel = discordClient.channels.cache.get(
    isDevelopment
      ? env.ID_DISCORD_TEST_SERVER_CHANNEL
      : env.ID_DISCORD_SERVER_CHANNEL,
  );
  const bodyContent = response.map(
    ({ createdAt, description, id, link, title }) => {
      return `
VAGUINHA ${title}:

ACHEI EM ${createdAt.toLocaleString()}, DESSRIÇÃ DA VAGA: ${description}, ${hyperlink('ACESSE AQUI', link)}


${id}
    `;
    },
  );

  const fodase = `${bodyContent}`;
  if (
    (channel && channel instanceof TextChannel) ||
    channel instanceof DMChannel
  ) {
    channel.send(fodase);
  }
}

discordClient.login(env.TOKEN_BOT);

discordClient.on('ready', async () => {
  console.log(
    `Bot started, now connected to Discord server as ${discordClient.user?.tag}`,
  );
  test();
});
