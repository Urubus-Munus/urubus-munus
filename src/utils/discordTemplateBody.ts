import { Job } from '@/types/job';
import { bold, hyperlink, italic } from 'discord.js';

export function createTemplate({ createdAt, title, description, link }: Job) {
  const dateTime = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  });

  return `${bold(`Vaga ${title} - ${dateTime.format(createdAt)}`)}

Descrição da Vaga: ${italic(description)}

${hyperlink('Link da Vaga', link)}
`;
}
