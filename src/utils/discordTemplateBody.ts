import { Job } from '@/types/job';
import { bold, hyperlink } from 'discord.js';

export function createTemplate({
  id,
  createdAt,
  title,
  description,
  link,
}: Job) {
  const message = `${bold(`Vaga ${title} - ${createdAt.toLocaleString()}`)}:
  Descrição da Vaga: ${description}
  Link da Vaga: ${hyperlink('ACESSE AQUI', link)}
  ${id}`;

  return message;
}
