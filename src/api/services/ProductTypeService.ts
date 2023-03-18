/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductTypeJpaDto } from '../models/ProductTypeJpaDto';
import type { ProductTypeReqDto } from '../models/ProductTypeReqDto';
import type { ProductTypeUpdateReqDto } from '../models/ProductTypeUpdateReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductTypeService {

    /**
     * @returns ProductTypeJpaDto OK
     * @throws ApiError
     */
    public static getAllProductType(): CancelablePromise<Array<ProductTypeJpaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/product-type',
        });
    }

    /**
     * @param requestBody
     * @returns ProductTypeJpaDto OK
     * @throws ApiError
     */
    public static update3(
        requestBody: ProductTypeUpdateReqDto,
    ): CancelablePromise<ProductTypeJpaDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/product-type',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns ProductTypeJpaDto OK
     * @throws ApiError
     */
    public static postProduct1(
        requestBody: ProductTypeReqDto,
    ): CancelablePromise<ProductTypeJpaDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/product-type',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
