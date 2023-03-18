/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FindingStatusStat } from './FindingStatusStat';

export type ScanReportJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    productId?: number;
    projectId?: string;
    subProductId?: number;
    subProductEnvId?: number;
    s3Url?: string;
    uid?: string;
    scanTool?: string;
    env?: string;
    product?: string;
    subProduct?: string;
    fileName?: string;
    status?: ScanReportJpaDto.status;
    totalCount?: number;
    triggerby?: ScanReportJpaDto.triggerby;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    mitigatedCount?: number;
    localDuplicateStats?: FindingStatusStat;
    duplicateStats?: FindingStatusStat;
    allFindingStats?: FindingStatusStat;
    newStats?: FindingStatusStat;
    mitigatedStats?: FindingStatusStat;
    toolConfigId?: number;
    errMessage?: string;
    totalNew?: number;
    totalDuplicate?: number;
    totalLocalDuplicate?: number;
    config?: string;
    scanType?: Array<string>;
    uploadTimezone?: string;
    updatedStats?: FindingStatusStat;
    scanIdentifier?: string;
    errorMessage?: string;
    deleted?: boolean;
    published?: boolean;
    tags?: Array<string>;
};

export namespace ScanReportJpaDto {

    export enum status {
        INITIATED = 'INITIATED',
        COMPLETED = 'COMPLETED',
        PROCESSING = 'PROCESSING',
        IMPORTING = 'IMPORTING',
        FAILED = 'FAILED',
    }

    export enum triggerby {
        PUSH_UPLOAD = 'PUSH_UPLOAD',
        MANUAL_TRIGGER = 'MANUAL_TRIGGER',
        SCHEDULED = 'SCHEDULED',
        UI_UPLOAD = 'UI_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }


}

