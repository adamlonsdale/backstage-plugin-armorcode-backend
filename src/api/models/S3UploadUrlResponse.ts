/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScanReportJpaDto } from './ScanReportJpaDto';

export type S3UploadUrlResponse = {
    signedUrl?: string;
    scan?: ScanReportJpaDto;
    additionalConfigs?: Record<string, any>;
};

