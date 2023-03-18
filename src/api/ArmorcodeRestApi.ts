import { Logger } from "winston";

import { OpenAPI, ProjectControllerService, ProjectJpaDto } from '../api/index';

export class ArmorcodeRestApi {

  public constructor(
    private readonly logger: Logger,
    host: string,
    token: string
  ){
    OpenAPI.TOKEN = token;
    OpenAPI.BASE = host;
  }

  public async getProjects() : Promise<ProjectJpaDto[]> {
    try {

        const projects = await ProjectControllerService.getAllProject();
        return projects;

      } catch (error) {
        throw error;
      }
  }

  public async getVulnerabilities(projectName: string, projectVersion: string) : Promise<ProjectJpaDto[]> {
    try {
      this.logger.debug("Getting Vulnerabilities");

        const projects = await ProjectControllerService.getAllProject();
        return projects;

      } catch (error) {
        throw error;
      }
  }
}