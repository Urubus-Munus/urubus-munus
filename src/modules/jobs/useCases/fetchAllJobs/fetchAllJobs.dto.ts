import { Either } from '@/shared/core/errors/Either';
import { Job } from '@/types/job';

export type OutputFindAllJobs = Either<
  null,
  {
    jobs: Job[];
  }
>;
