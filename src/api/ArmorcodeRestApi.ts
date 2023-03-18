import { Logger } from "winston";
import fetch from "node-fetch";

import { OpenAPI, ProjectControllerService, ProjectJpaDto } from '../api/index';

export class ArmorcodeRestApi {

  public constructor(
    private readonly logger: Logger,
    private readonly host: string,
    private readonly token: string
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

        const projects = await ProjectControllerService.getAllProject();
        return projects;

      } catch (error) {
        throw error;
      }
  }
}