/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedProductDto } from '../models/AggregatedProductDto';
import type { BulkProductCreateResponseDto } from '../models/BulkProductCreateResponseDto';
import type { DynamicProductReqDto } from '../models/DynamicProductReqDto';
import type { GlobalFilterDto } from '../models/GlobalFilterDto';
import type { ListProductRequest } from '../models/ListProductRequest';
import type { Pageable } from '../models/Pageable';
import type { PageProductResponseDto } from '../models/PageProductResponseDto';
import type { ProductAggregatedResponse } from '../models/ProductAggregatedResponse';
import type { ProductGlobalDto } from '../models/ProductGlobalDto';
import type { ProductReqDto } from '../models/ProductReqDto';
import type { ProductResponseDto } from '../models/ProductResponseDto';
import type { ProductUpdateReqDto } from '../models/ProductUpdateReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductControllerService {

    /**
     * @returns ProductResponseDto OK
     * @throws ApiError
     */
    public static getAllProduct(): CancelablePromise<Array<ProductResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product',
        });
    }

    /**
     * @param requestBody
     * @returns ProductResponseDto OK
     * @throws ApiError
     */
    public static update2(
        requestBody: ProductUpdateReqDto,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns ProductResponseDto OK
     * @throws ApiError
     */
    public static postProduct(
        requestBody: ProductReqDto,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param formData
     * @returns BulkProductCreateResponseDto OK
     * @throws ApiError
     */
    public static bulkUploadProducts(
        formData?: {
            file: Blob;
        },
    ): CancelablePromise<BulkProductCreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/product/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns ProductGlobalDto OK
     * @throws ApiError
     */
    public static getGlobalProductFilter(): CancelablePromise<Array<ProductGlobalDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/filter',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static setGlobalProductFilter(
        requestBody: GlobalFilterDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/product/filter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static getProductsWithDynamicProperties(
        requestBody: DynamicProductReqDto,
    ): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/product/dynamic',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns ProductResponseDto OK
     * @throws ApiError
     */
    public static getProduct1(
        id: number,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/{id}',
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
    public static deleteProduct(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param name
     * @returns string OK
     * @throws ApiError
     */
    public static validateProductName(
        name: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/validate',
            query: {
                'name': name,
            },
        });
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getAllProductFilters(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/product-filters',
        });
    }

    /**
     * @param aggType
     * @returns AggregatedProductDto OK
     * @throws ApiError
     */
    public static getAggreagatedProduct(
        aggType: 'TEAM' | 'TIER',
    ): CancelablePromise<Array<AggregatedProductDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/get-aggreagted-data',
            query: {
                'aggType': aggType,
            },
        });
    }

    /**
     * @deprecated
     * @returns ProductAggregatedResponse OK
     * @throws ApiError
     */
    public static getAggreagatedTeamProduct(): CancelablePromise<Array<ProductAggregatedResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/get-aggreagted-data-by-team',
        });
    }

    /**
     * @param listProductRequest
     * @returns any OK
     * @throws ApiError
     */
    public static getAcrossBuProductWithRiskScore(
        listProductRequest: ListProductRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/elastic',
            query: {
                'listProductRequest': listProductRequest,
            },
        });
    }

    /**
     * @returns number OK
     * @throws ApiError
     */
    public static getProductCount(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/count',
        });
    }

    /**
     * @param page
     * @param buId
     * @param teamId
     * @returns PageProductResponseDto OK
     * @throws ApiError
     */
    public static getAllProduct1(
        page: Pageable,
        buId?: number,
        teamId?: number,
    ): CancelablePromise<PageProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product/all',
            query: {
                'buId': buId,
                'teamId': teamId,
                'page': page,
            },
        });
    }

}
