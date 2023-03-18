/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectJpaDto } from '../models/ProjectJpaDto';
import type { ProjectReqDto } from '../models/ProjectReqDto';
import type { ProjectUpdateReqDto } from '../models/ProjectUpdateReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI, OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectControllerService {

  /**
   * @returns ProjectJpaDto OK
   * @throws ApiError
   */
  public static getAllProject(): CancelablePromise<Array<ProjectJpaDto>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/project",
    });
  }

  /**
   * @param requestBody
   * @returns ProjectJpaDto OK
   * @throws ApiError
   */
  public static update1(
    requestBody: ProjectUpdateReqDto
  ): CancelablePromise<ProjectJpaDto> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/user/project",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns ProjectJpaDto OK
   * @throws ApiError
   */
  public static postProject(
    requestBody: ProjectReqDto
  ): CancelablePromise<ProjectJpaDto> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/project",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns ProjectJpaDto OK
   * @throws ApiError
   */
  public static getProduct(id: number): CancelablePromise<ProjectJpaDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/project/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public static delete(id: number): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/user/project/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @param name
   * @returns string OK
   * @throws ApiError
   */
  public static validateProjectName(name: string): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/project/validate",
      query: {
        name: name,
      },
    });
  }
}
