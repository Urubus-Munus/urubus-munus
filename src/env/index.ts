import { z } from 'zod';

const envSchema = z.object({
  TOKEN_BOT: z.string(),
  ID_DISCORD_TEST_SERVER_CHANNEL: z.string(),
  ID_DISCORD_SERVER_CHANNEL: z.string(),
  NODE_ENV: z.string(),
});

type EnvSchema = z.infer<typeof envSchema>;

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format());
  throw new Error('Invalid environment variables');
}

const env: EnvSchema = _env.data;

export { env };
