import axios from 'axios';

export class UrubusMunusClient {
  public async fetchAllJobs() {
    const response = await axios.get('http://localhost:3000/jobs');

    return response.data;
  }
}
