import { JobsImplementations } from '@/modules/jobs/repositories/implementations/Jobs.implementations';
import { FindAllJobs } from '@/modules/jobs/useCases/fetchAllJobs/fetchAllJobs.useCase';

export const findAllJobsUseCase = new FindAllJobs(new JobsImplementations());
