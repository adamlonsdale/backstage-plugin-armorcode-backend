/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ScanUploadRequest = {
    environment: string;
    product: number;
    subProduct: number;
    fileName: string;
    uploadTimezone?: string;
    project?: Array<number>;
    scanIdentifier?: string;
    customTool?: boolean;
    tags?: Array<string>;
};

