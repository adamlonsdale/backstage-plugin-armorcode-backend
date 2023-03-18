/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigurationPropertyDto } from './ConfigurationPropertyDto';
import type { CoreLoginJpaDto } from './CoreLoginJpaDto';

export type CoreConfigurationJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    toolName?: string;
    product?: number;
    subProduct?: number;
    productName?: string;
    subProductName?: string;
    environment?: string;
    engagementId?: string;
    suspended?: boolean;
    frequencyUnit?: string;
    frequency?: number;
    configurations?: Array<ConfigurationPropertyDto>;
    operationalStatus?: CoreConfigurationJpaDto.operationalStatus;
    operationalStatusMessage?: string;
    scanStatus?: CoreConfigurationJpaDto.scanStatus;
    scanId?: number;
    lastScanRun?: string;
    lastConnected?: string;
    webHookConfigured?: boolean;
    toolType?: CoreConfigurationJpaDto.toolType;
    toolLogin?: CoreLoginJpaDto;
    jobConfigId?: number;
    lastScanId?: number;
    toolState?: string;
    tags?: Array<string>;
    markInactiveAfter?: number;
    lastToolScanDate?: number;
    lastToolScanStatus?: CoreConfigurationJpaDto.lastToolScanStatus;
    lastExecutionStatus?: CoreConfigurationJpaDto.lastExecutionStatus;
    threadWaitTime?: number;
    maxAttempts?: number;
    deleted?: boolean;
    published?: boolean;
};

export namespace CoreConfigurationJpaDto {

    export enum operationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        PARTIAL = 'PARTIAL',
        CONFIG_ERROR = 'CONFIG_ERROR',
        NOT_CONFIGURED = 'NOT_CONFIGURED',
    }

    export enum scanStatus {
        PASSED = 'PASSED',
        RUNNING = 'RUNNING',
        FAILED = 'FAILED',
    }

    export enum toolType {
        PULL = 'PULL',
        PUSH = 'PUSH',
        SCAN_UPLOAD = 'SCAN_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }

    export enum lastToolScanStatus {
        PASSED = 'PASSED',
        RUNNING = 'RUNNING',
        FAILED = 'FAILED',
    }

    export enum lastExecutionStatus {
        UPLOADED = 'UPLOADED',
        FAILED = 'FAILED',
        NO_NEW_REPORTS = 'NO_NEW_REPORTS',
        REPORT_GENERATION_IN_PROGRESS = 'REPORT_GENERATION_IN_PROGRESS',
    }


}

