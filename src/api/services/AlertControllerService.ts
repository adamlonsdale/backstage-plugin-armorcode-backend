/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAlertTicketRequest } from '../models/CreateAlertTicketRequest';
import type { CreateAlertTicketResponse } from '../models/CreateAlertTicketResponse';
import type { DescribeAlertResponse } from '../models/DescribeAlertResponse';
import type { ListAlertRequest } from '../models/ListAlertRequest';
import type { ListAlertResponse } from '../models/ListAlertResponse';
import type { Pageable } from '../models/Pageable';
import type { UpdateAlertRequest } from '../models/UpdateAlertRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AlertControllerService {

    /**
     * @param id
     * @returns DescribeAlertResponse OK
     * @throws ApiError
     */
    public static describeAlert(
        id: number,
    ): CancelablePromise<DescribeAlertResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alerts/A-{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns DescribeAlertResponse OK
     * @throws ApiError
     */
    public static updateAlert(
        id: number,
        requestBody: UpdateAlertRequest,
    ): CancelablePromise<DescribeAlertResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/alerts/A-{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns CreateAlertTicketResponse OK
     * @throws ApiError
     */
    public static createAlertTicket(
        id: number,
        requestBody: CreateAlertTicketRequest,
    ): CancelablePromise<CreateAlertTicketResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/alerts/A-{id}/ticket',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param alertRequest
     * @param page
     * @returns ListAlertResponse OK
     * @throws ApiError
     */
    public static listAlert(
        alertRequest: ListAlertRequest,
        page: Pageable,
    ): CancelablePromise<ListAlertResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alerts',
            query: {
                'alertRequest': alertRequest,
                'page': page,
            },
        });
    }

    /**
     * @returns number OK
     * @throws ApiError
     */
    public static alertStats(): CancelablePromise<Record<string, Record<string, number>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alerts/alert-stats',
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static alertFilters(): CancelablePromise<Record<string, Array<any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alerts/alert-filters',
        });
    }

}
