import { UseCase } from '@/shared/core/entities/useCase/UseCase';
import { right } from '@/shared/core/errors/Either';
import { JobsRepository } from '../../repositories/contracts/Jobs.repository';
import { OutputFindAllJobs } from './fetchAllJobs.dto';

export class FindAllJobs extends UseCase<null, OutputFindAllJobs> {
  constructor(private readonly jobsRepository: JobsRepository) {
    super();
  }

  async execute(): Promise<OutputFindAllJobs> {
    const jobs = await this.jobsRepository.findAllJobs();

    return right({
      jobs,
    });
  }
}
