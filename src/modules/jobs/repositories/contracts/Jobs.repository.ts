import { Job } from 'src/types/job';

export abstract class JobsRepository {
  abstract findAllJobs(): Promise<Job[]>;
  abstract findJobsByRole(): Promise<Job[]>;
}
