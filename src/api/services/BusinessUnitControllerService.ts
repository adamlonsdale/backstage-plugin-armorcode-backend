/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessUnitReqDto } from '../models/BusinessUnitReqDto';
import type { BusinessUnitResponseDto } from '../models/BusinessUnitResponseDto';
import type { BusinessUnitUpdateDto } from '../models/BusinessUnitUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BusinessUnitControllerService {

    /**
     * @param requestBody
     * @returns BusinessUnitResponseDto OK
     * @throws ApiError
     */
    public static updateName(
        requestBody: BusinessUnitUpdateDto,
    ): CancelablePromise<BusinessUnitResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/business-unit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns BusinessUnitResponseDto OK
     * @throws ApiError
     */
    public static createBusinessUnit(
        requestBody: BusinessUnitReqDto,
    ): CancelablePromise<BusinessUnitResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/business-unit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
