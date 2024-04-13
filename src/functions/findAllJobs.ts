import { findAllJobsUseCase } from '@/infra/implementations/jobs';
import { discordChannel } from '@/utils/discordChannel';
import { createTemplate } from '@/utils/discordTemplateBody';
import { DMChannel, TextChannel } from 'discord.js';

/**
Asynchronously sends formatted job entries to a Discord channel with a delay between each message.
 */
export async function findAllJobs() {
  const jobs = await findAllJobsUseCase.execute();
  const response = jobs.value?.jobs;

  if (!response) {
    return;
  }

  const channelDiscord = discordChannel();
  if (
    channelDiscord instanceof TextChannel ||
    channelDiscord instanceof DMChannel
  ) {
    const DELAY_BETWEEN_MESSAGES = 5000;

    let delay = 0;

    response.forEach((job) => {
      setTimeout(() => {
        channelDiscord.send(createTemplate(job));
      }, delay);

      delay += DELAY_BETWEEN_MESSAGES;
    });
  }
}
