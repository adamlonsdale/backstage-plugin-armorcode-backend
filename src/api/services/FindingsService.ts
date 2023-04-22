/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkFindingUpdateRequest } from '../models/BulkFindingUpdateRequest';
import type { DescribeFindingResponse } from '../models/DescribeFindingResponse';
import type { DevOpsCycleRequest } from '../models/DevOpsCycleRequest';
import type { DevOpsCycleResponse } from '../models/DevOpsCycleResponse';
import type { FindingCloumUniqueValueRequest } from '../models/FindingCloumUniqueValueRequest';
import type { FindingFiltersRequest } from '../models/FindingFiltersRequest';
import type { FindingStatResponse } from '../models/FindingStatResponse';
import type { FindingStatsDto } from '../models/FindingStatsDto';
import type { FindingUpdateRequest } from '../models/FindingUpdateRequest';
import type { ListFindingResponse } from '../models/ListFindingResponse';
import type { PageFindingSummary } from '../models/PageFindingSummary';
import type { UpdateFindingTagsBulkRequestDto } from '../models/UpdateFindingTagsBulkRequestDto';
import type { FindingStatsAppSecStatusDto } from '../models/FindingStatsAppSecStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FindingsService {

    /**
     * @param findingId
     * @returns DescribeFindingResponse OK
     * @throws ApiError
     */
    public static describeFinding(
        findingId: number,
    ): CancelablePromise<DescribeFindingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/findings/{findingId}',
            path: {
                'findingId': findingId,
            },
        });
    }

    /**
     * @param findingId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateFindingStatus(
        findingId: number,
        requestBody: FindingUpdateRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/findings/{findingId}',
            path: {
                'findingId': findingId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static bulkUpdateFindingStatus(
        requestBody: BulkFindingUpdateRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/findings/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateFindingTags(
        requestBody: UpdateFindingTagsBulkRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/findings/findingTags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns PageFindingSummary OK
     * @throws ApiError
     */
    public static underReview(
        requestBody: FindingFiltersRequest,
    ): CancelablePromise<PageFindingSummary> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/under-review',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns FindingStatResponse OK
     * @throws ApiError
     */
    public static findingStatsByTeamName(
        requestBody: FindingStatsDto,
    ): CancelablePromise<FindingStatResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/stat/team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns FindingStatResponse OK
     * @throws ApiError
     */
    public static findingStatsByProductName(
        requestBody: FindingStatsDto,
    ): CancelablePromise<FindingStatResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/stat/product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns FindingStatResponse OK
     * @throws ApiError
     */
        public static findingStatsByProductId(
            requestBody: FindingStatsAppSecStatusDto,
        ): CancelablePromise<FindingStatResponse> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/user/findings/findingStats/by-appsec-status',
                body: requestBody,
                mediaType: 'application/json',
            });
        }
    
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getFindingsFilters(
        requestBody: FindingCloumUniqueValueRequest,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/findings-filters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns DevOpsCycleResponse OK
     * @throws ApiError
     */
    public static devOpsCycleDetails(
        requestBody: DevOpsCycleRequest,
    ): CancelablePromise<DevOpsCycleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/details',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns ListFindingResponse OK
     * @throws ApiError
     */
    public static listFindings(
        requestBody: FindingFiltersRequest,
    ): CancelablePromise<ListFindingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/findings/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
