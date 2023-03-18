/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessUnitTeamResponseDto } from '../models/BusinessUnitTeamResponseDto';
import type { NameIdPair } from '../models/NameIdPair';
import type { Pageable } from '../models/Pageable';
import type { PageBusinessUnitTeamResponseDto } from '../models/PageBusinessUnitTeamResponseDto';
import type { TeamJpaDto } from '../models/TeamJpaDto';
import type { TeamRequestDto } from '../models/TeamRequestDto';
import type { TeamStatsRequestDto } from '../models/TeamStatsRequestDto';
import type { TeamStatsResponse } from '../models/TeamStatsResponse';
import type { TeamUpdateRequestDto } from '../models/TeamUpdateRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeamControllerService {

    /**
     * @param requestBody
     * @returns TeamJpaDto OK
     * @throws ApiError
     */
    public static updateTeam(
        requestBody: TeamUpdateRequestDto,
    ): CancelablePromise<TeamJpaDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns TeamJpaDto OK
     * @throws ApiError
     */
    public static createTeam(
        requestBody: TeamRequestDto,
    ): CancelablePromise<TeamJpaDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns TeamJpaDto OK
     * @throws ApiError
     */
    public static updateTeamWithUser(
        requestBody: TeamUpdateRequestDto,
    ): CancelablePromise<TeamJpaDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/team/with-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns BusinessUnitTeamResponseDto OK
     * @throws ApiError
     */
    public static getTeam(
        id: number,
    ): CancelablePromise<BusinessUnitTeamResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteTeam(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/team/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param name
     * @returns boolean OK
     * @throws ApiError
     */
    public static getTeams(
        name: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/name-check',
            query: {
                'name': name,
            },
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getFilters(): CancelablePromise<Record<string, Array<any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/filters',
        });
    }

    /**
     * @param page
     * @param dto
     * @returns PageBusinessUnitTeamResponseDto OK
     * @throws ApiError
     */
    public static getFilteredTeams(
        page: Pageable,
        dto: TeamRequestDto,
    ): CancelablePromise<PageBusinessUnitTeamResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/filtered-data',
            query: {
                'page': page,
                'dto': dto,
            },
        });
    }

    /**
     * @param id
     * @returns NameIdPair OK
     * @throws ApiError
     */
    public static getTeamAssociatedProductSubProduct(
        id: number,
    ): CancelablePromise<Record<string, Array<NameIdPair>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/associated-product-sub-product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns NameIdPair OK
     * @throws ApiError
     */
    public static getTeams1(): CancelablePromise<Array<NameIdPair>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/all-teams',
        });
    }

    /**
     * @param requestDto
     * @returns TeamStatsResponse OK
     * @throws ApiError
     */
    public static getTeamStats(
        requestDto: TeamStatsRequestDto,
    ): CancelablePromise<Array<TeamStatsResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/all-team-stats',
            query: {
                'requestDto': requestDto,
            },
        });
    }

}
