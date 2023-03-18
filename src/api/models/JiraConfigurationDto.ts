/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomField } from './CustomField';
import type { ProductJpaDto } from './ProductJpaDto';
import type { SubProductJpaDto } from './SubProductJpaDto';
import type { TransitionState } from './TransitionState';

export type JiraConfigurationDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    projectKey?: string;
    enabled?: boolean;
    configurationType?: string;
    configurationKey?: string;
    configurationValue?: string;
    reason?: string;
    product?: ProductJpaDto;
    subProduct?: SubProductJpaDto;
    properties?: Record<string, string>;
    ticketSystemType?: JiraConfigurationDto.ticketSystemType;
    operationalStatus?: JiraConfigurationDto.operationalStatus;
    lastConnected?: string;
    webHookEnabled?: boolean;
    webHookToken?: string;
    webHookUrl?: string;
    issueType?: string;
    loginConfigId?: number;
    markResolved?: boolean;
    resolvedStatus?: string;
    lastUpdated?: string;
    labels?: Array<string>;
    operationalStatusMessage?: string;
    url?: string;
    customFields?: Array<CustomField>;
    transitions?: Array<TransitionState>;
    reopenStatus?: string;
    deleted?: boolean;
    published?: boolean;
};

export namespace JiraConfigurationDto {

    export enum ticketSystemType {
        JIRA = 'JIRA',
        AZURE_BOARD = 'AZURE_BOARD',
        SERVICE_NOW = 'SERVICE_NOW',
        FRESHSERVICE = 'FRESHSERVICE',
        GITHUB_ISSUES = 'GITHUB_ISSUES',
        PAGERDUTY = 'PAGERDUTY',
        SHORTCUT = 'SHORTCUT',
        GITLAB_ISSUES = 'GITLAB_ISSUES',
    }

    export enum operationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        PARTIAL = 'PARTIAL',
        CONFIG_ERROR = 'CONFIG_ERROR',
        NOT_CONFIGURED = 'NOT_CONFIGURED',
    }


}

