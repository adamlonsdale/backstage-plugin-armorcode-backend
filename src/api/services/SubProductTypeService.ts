/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubProductTypeJpaDto } from '../models/SubProductTypeJpaDto';
import type { SubProductTypeReqDto } from '../models/SubProductTypeReqDto';
import type { SubProductTypeUpdateReqDto } from '../models/SubProductTypeUpdateReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubProductTypeService {

    /**
     * @returns SubProductTypeJpaDto OK
     * @throws ApiError
     */
    public static getAllProductSubType(): CancelablePromise<Array<SubProductTypeJpaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/sub-product-type',
        });
    }

    /**
     * @param requestBody
     * @returns SubProductTypeJpaDto OK
     * @throws ApiError
     */
    public static update(
        requestBody: SubProductTypeUpdateReqDto,
    ): CancelablePromise<SubProductTypeJpaDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/sub-product-type',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns SubProductTypeJpaDto OK
     * @throws ApiError
     */
    public static postProductSub(
        requestBody: SubProductTypeReqDto,
    ): CancelablePromise<SubProductTypeJpaDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/sub-product-type',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
