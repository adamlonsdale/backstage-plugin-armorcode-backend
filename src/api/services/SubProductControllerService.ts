/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkProductCreateResponseDto } from '../models/BulkProductCreateResponseDto';
import type { Pageable } from '../models/Pageable';
import type { PageSubProductResponseDto } from '../models/PageSubProductResponseDto';
import type { SubProductEsDto } from '../models/SubProductEsDto';
import type { SubProductHierarchyResponseDto } from '../models/SubProductHierarchyResponseDto';
import type { SubProductReqDto } from '../models/SubProductReqDto';
import type { SubProductResponseDto } from '../models/SubProductResponseDto';
import type { SubProductUpdateReqDto } from '../models/SubProductUpdateReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubProductControllerService {

    /**
     * @deprecated
     * @returns SubProductResponseDto OK
     * @throws ApiError
     */
    public static getSubProduct(): CancelablePromise<Array<SubProductResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product',
        });
    }

    /**
     * @param requestBody
     * @returns SubProductResponseDto OK
     * @throws ApiError
     */
    public static postUpdate(
        requestBody: SubProductUpdateReqDto,
    ): CancelablePromise<SubProductResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/sub-product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns SubProductResponseDto OK
     * @throws ApiError
     */
    public static postSubProduct(
        requestBody: SubProductReqDto,
    ): CancelablePromise<SubProductResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sub-product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param formData
     * @returns BulkProductCreateResponseDto OK
     * @throws ApiError
     */
    public static bulkUploadSubproducts(
        formData?: {
            file: Blob;
        },
    ): CancelablePromise<BulkProductCreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sub-product/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param productId
     * @param riskTrendInfo
     * @param riskScoreDate
     * @param environmentName
     * @param teamInfo
     * @param buId
     * @param trendDayDiff
     * @returns SubProductEsDto OK
     * @throws ApiError
     */
    public static getSubProductWithScore(
        productId?: number,
        riskTrendInfo?: boolean,
        riskScoreDate?: string,
        environmentName?: 'PRODUCTION' | 'STAGING',
        teamInfo?: boolean,
        buId?: Array<number>,
        trendDayDiff?: number,
    ): CancelablePromise<Array<SubProductEsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/sub-product/elastic',
            query: {
                'productId': productId,
                'riskTrendInfo': riskTrendInfo,
                'riskScoreDate': riskScoreDate,
                'environmentName': environmentName,
                'teamInfo': teamInfo,
                'buId': buId,
                'trendDayDiff': trendDayDiff,
            },
        });
    }

    /**
     * @param productId
     * @returns SubProductResponseDto OK
     * @throws ApiError
     */
    public static getSubProductByProduct(
        productId: number,
    ): CancelablePromise<Array<SubProductResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/{productId}/product',
            path: {
                'productId': productId,
            },
        });
    }

    /**
     * @param id
     * @returns SubProductResponseDto OK
     * @throws ApiError
     */
    public static getSubProduct1(
        id: number,
    ): CancelablePromise<SubProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/{id}',
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
    public static deleteSubProduct(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/sub-product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param name
     * @param productId
     * @returns string OK
     * @throws ApiError
     */
    public static validateSubProductName(
        name: string,
        productId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/validate',
            query: {
                'name': name,
                'productId': productId,
            },
        });
    }

    /**
     * @returns SubProductHierarchyResponseDto OK
     * @throws ApiError
     */
    public static getHierarchyInfo(): CancelablePromise<Array<SubProductHierarchyResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/team-hierarchy',
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getSubProductFilter(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/subproduct-filters',
        });
    }

    /**
     * @param page
     * @param name
     * @returns PageSubProductResponseDto OK
     * @throws ApiError
     */
    public static getShallowSubProduct(
        page: Pageable,
        name?: string,
    ): CancelablePromise<PageSubProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/shallow',
            query: {
                'page': page,
                'name': name,
            },
        });
    }

    /**
     * @param productId
     * @returns SubProductEsDto OK
     * @throws ApiError
     */
    public static subProductScore(
        productId?: number,
    ): CancelablePromise<Array<SubProductEsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/elastic/',
            query: {
                'productId': productId,
            },
        });
    }

    /**
     * @param productId
     * @returns SubProductEsDto OK
     * @throws ApiError
     */
    public static subProductClone(
        productId?: number,
    ): CancelablePromise<Array<SubProductEsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/clone',
            query: {
                'productId': productId,
            },
        });
    }

    /**
     * @param page
     * @param buId
     * @param teamId
     * @returns PageSubProductResponseDto OK
     * @throws ApiError
     */
    public static getAllProduct2(
        page: Pageable,
        buId?: number,
        teamId?: number,
    ): CancelablePromise<PageSubProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sub-product/all',
            query: {
                'buId': buId,
                'teamId': teamId,
                'page': page,
            },
        });
    }

}
