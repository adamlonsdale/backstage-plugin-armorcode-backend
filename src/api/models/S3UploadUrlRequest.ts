/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3UploadUrlRequest = {
    env: string;
    product: string;
    projectId?: string;
    subProduct: string;
    scanTool: string;
    fileName: string;
    toolId?: string;
    triggerby?: S3UploadUrlRequest.triggerby;
    toolConfigId?: number;
    toolType?: S3UploadUrlRequest.toolType;
    productName?: string;
    subProductName?: string;
    directory?: string;
    fileExtension?: string;
    uploadTimezone?: string;
    scanIdentifier?: string;
    tags?: Array<string>;
};

export namespace S3UploadUrlRequest {

    export enum triggerby {
        PUSH_UPLOAD = 'PUSH_UPLOAD',
        MANUAL_TRIGGER = 'MANUAL_TRIGGER',
        SCHEDULED = 'SCHEDULED',
        UI_UPLOAD = 'UI_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }

    export enum toolType {
        PULL = 'PULL',
        PUSH = 'PUSH',
        SCAN_UPLOAD = 'SCAN_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }


}

