/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FindingFiltersRequest } from './FindingFiltersRequest';

export type BulkFindingUpdateRequest = {
    status?: BulkFindingUpdateRequest.status;
    mitigation?: boolean;
    severity?: BulkFindingUpdateRequest.severity;
    category?: string;
    reason?: string;
    notes?: string;
    scope?: BulkFindingUpdateRequest.scope;
    unSupress?: boolean;
    unsupressAfterDuration?: string;
    createTicket?: boolean;
    ownerId?: number;
    ticketTitle?: string;
    ticketDescription?: string;
    ticketPriority?: string;
    ticketComment?: string;
    developer?: string;
    ticketSystemType?: BulkFindingUpdateRequest.ticketSystemType;
    confirmed?: boolean;
    product?: number;
    subProduct?: number;
    env?: number;
    rulesOnFutureFindingsEnabled?: boolean;
    ticketIds?: string;
    ticketUrls?: string;
    slaDueDate?: string;
    findings?: Array<string>;
    armorcodeProjects?: Array<number>;
    scanType?: string;
    findingIds?: Array<number>;
    findingFilterRequest?: FindingFiltersRequest;
};

export namespace BulkFindingUpdateRequest {

    export enum status {
        OPEN = 'OPEN',
        CONFIRMED = 'CONFIRMED',
        ACCEPTRISK = 'ACCEPTRISK',
        FALSEPOSITIVE = 'FALSEPOSITIVE',
        MITIGATED = 'MITIGATED',
    }

    export enum severity {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }

    export enum scope {
        FINDING = 'FINDING',
        SUBPRODUCT = 'SUBPRODUCT',
        PRODUCT = 'PRODUCT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }

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


}

