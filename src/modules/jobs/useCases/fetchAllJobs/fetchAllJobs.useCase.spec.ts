import { InMemoryJobsRepository } from '@tests/modules/jobs/repositories/InMemoryJobsRepository';
import { error } from 'console';
import { describe, expect, it, onTestFailed } from 'vitest';
import { FindAllJobs } from './fetchAllJobs.useCase';

describe('Fetch All Jobs Use Case', () => {
  const jobsRepository = new InMemoryJobsRepository();
  const sut = new FindAllJobs(jobsRepository);

  it('Should return an array of jobs', async () => {
    const response = await sut.execute();

    if (response.isRight()) {
      expect(response.value.jobs).toBeDefined();
      expect(response.value.jobs.length).toBeGreaterThan(0);
      expect(response.value.jobs[0]).toHaveProperty('id');
    } else {
      onTestFailed(error);
    }
  });
});
