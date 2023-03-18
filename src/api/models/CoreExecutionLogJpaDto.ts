/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CoreExecutionLogJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    apiUrl?: string;
    apiVersion?: string;
    apiTime?: string;
    lastScanId?: string;
    engagementId?: string;
    tool?: string;
    status?: CoreExecutionLogJpaDto.status;
    errorMessage?: string;
    scan?: number;
    deleted?: boolean;
    published?: boolean;
};

export namespace CoreExecutionLogJpaDto {

    export enum status {
        UPLOADED = 'UPLOADED',
        FAILED = 'FAILED',
        NO_NEW_REPORTS = 'NO_NEW_REPORTS',
        REPORT_GENERATION_IN_PROGRESS = 'REPORT_GENERATION_IN_PROGRESS',
    }


}

