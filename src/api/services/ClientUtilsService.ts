/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { S3UploadFileRequest } from '../models/S3UploadFileRequest';
import type { S3UploadUrlRequest } from '../models/S3UploadUrlRequest';
import type { S3UploadUrlResponse } from '../models/S3UploadUrlResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientUtilsService {

    /**
     * @param requestBody
     * @returns S3UploadUrlResponse OK
     * @throws ApiError
     */
    public static getPreSignedS3UrlForScanFileUpload(
        requestBody: S3UploadUrlRequest,
    ): CancelablePromise<S3UploadUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/client/utils/scan/upload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static uploadFileStreamToS3(
        requestBody: S3UploadFileRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/client/utils/scan/upload/v2',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param dynamicMapping
     * @param requestBody
     * @returns S3UploadUrlResponse OK
     * @throws ApiError
     */
    public static s3Upload(
        dynamicMapping: boolean,
        requestBody: S3UploadUrlRequest,
    ): CancelablePromise<S3UploadUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/client/utils/s3/upload',
            query: {
                'dynamicMapping': dynamicMapping,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
