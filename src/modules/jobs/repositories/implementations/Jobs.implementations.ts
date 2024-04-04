import { fakeJobs } from '@/data';
import { Job } from '@/types/job';
import { JobsRepository } from '../contracts/Jobs.repository';

export class JobsImplementations implements JobsRepository {
  findJobsByRole(): Promise<Job[]> {
    throw new Error('Method not implemented.');
  }

  findAllJobs(): Promise<Job[]> {
    const jobs = fakeJobs;

    return Promise.resolve(jobs);
  }
}
