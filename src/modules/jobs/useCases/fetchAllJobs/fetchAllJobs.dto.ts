import { Either } from '@shared/core/errors/Either';
import { Job } from 'src/types/job';

export type OutputFindAllJobs = Either<
  null,
  {
    jobs: Job[];
  }
>;
