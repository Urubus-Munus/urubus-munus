import { JobsRepository } from '@modules/jobs/repositories/contracts/Jobs.repository';
import { fakeJobs } from 'src/data';
import { Job } from 'src/types/job';

export class InMemoryJobsRepository implements JobsRepository {
  findJobsByRole(): Promise<Job[]> {
    throw new Error('Method not implemented.');
  }

  async findAllJobs(): Promise<Job[]> {
    const jobs = fakeJobs;

    return jobs;
  }
}
