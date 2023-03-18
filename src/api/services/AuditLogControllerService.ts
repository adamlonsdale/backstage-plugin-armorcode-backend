/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogFilter } from '../models/AuditLogFilter';
import type { Pageable } from '../models/Pageable';
import type { PageAuditLogResponseDto } from '../models/PageAuditLogResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuditLogControllerService {

    /**
     * @returns boolean OK
     * @throws ApiError
     */
    public static getSystemUserStatus(): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/audit/log/system/user/status',
        });
    }

    /**
     * @param status
     * @returns any OK
     * @throws ApiError
     */
    public static updateSystemUserStatus(
        status: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/audit/log/system/user/status',
            query: {
                'status': status,
            },
        });
    }

    /**
     * @param auditLogLevel
     * @returns any OK
     * @throws ApiError
     */
    public static getAuditLogFilters(
        auditLogLevel: 'ALL' | 'TENANT_LEVEL' | 'BUSINESS_UNIT_LEVEL' = 'ALL',
    ): CancelablePromise<Record<string, Array<any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/audit/log/filters',
            query: {
                'auditLogLevel': auditLogLevel,
            },
        });
    }

    /**
     * @param page
     * @param auditLogLevel
     * @returns PageAuditLogResponseDto OK
     * @throws ApiError
     */
    public static getAuditLogs(
        page: Pageable,
        auditLogLevel: 'ALL' | 'TENANT_LEVEL' | 'BUSINESS_UNIT_LEVEL' = 'ALL',
    ): CancelablePromise<PageAuditLogResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/audit/log/details',
            query: {
                'page': page,
                'auditLogLevel': auditLogLevel,
            },
        });
    }

    /**
     * @param page
     * @param auditLogFilter
     * @param auditLogLevel
     * @returns PageAuditLogResponseDto OK
     * @throws ApiError
     */
    public static getAuditLogsByFilter(
        page: Pageable,
        auditLogFilter: AuditLogFilter,
        auditLogLevel: 'ALL' | 'TENANT_LEVEL' | 'BUSINESS_UNIT_LEVEL' = 'ALL',
    ): CancelablePromise<PageAuditLogResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/audit/log/details/page',
            query: {
                'page': page,
                'auditLogLevel': auditLogLevel,
                'auditLogFilter': auditLogFilter,
            },
        });
    }

}
