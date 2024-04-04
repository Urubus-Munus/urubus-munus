import { findAllJobsUseCase } from '@/infra/implementations/jobs';
import { discordChannel } from '@/utils/discordChannel';
import { createTemplate } from '@/utils/discordTemplateBody';
import { DMChannel, TextChannel } from 'discord.js';

export async function findAllJobs() {
  const jobs = await findAllJobsUseCase.execute();
  const response = jobs.value?.jobs;

  if (!response) {
    return;
  }

  const bodyContent = response.map((job) => createTemplate(job)).join('\n\n');

  const channelDiscord = discordChannel();
  if (
    channelDiscord instanceof TextChannel ||
    channelDiscord instanceof DMChannel
  ) {
    channelDiscord.send(bodyContent);
  }
}
