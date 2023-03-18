/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameIdPair } from './NameIdPair';
import type { ProposeFindingActionData } from './ProposeFindingActionData';
import type { TicketSummary } from './TicketSummary';

export type FindingSummary = {
    ruleId?: Array<string>;
    description?: string;
    source?: string;
    severity?: FindingSummary.severity;
    armorcodeCategory?: string;
    findingCategory?: string;
    category?: string;
    status?: string;
    productStatus?: string;
    id?: number;
    tid?: number;
    policy?: Array<string>;
    lastUpdated?: string;
    createdAt?: string;
    externalMappings?: Record<string, Array<string>>;
    title?: string;
    armorcodeTicket?: Array<TicketSummary>;
    toolSeverity?: FindingSummary.toolSeverity;
    cwe?: Array<string>;
    cve?: Array<string>;
    product?: NameIdPair;
    subProduct?: NameIdPair;
    environment?: NameIdPair;
    securityOwner?: NameIdPair;
    owner?: NameIdPair;
    developer?: string;
    developerName?: string;
    toolId?: string;
    filePath?: string;
    url?: string;
    lineNumber?: number;
    mitigated?: boolean;
    scan?: number;
    scanType?: Array<string>;
    analysisType?: FindingSummary.analysisType;
    similarFindings?: Array<string>;
    additionalDetails?: Record<string, any>;
    slaBreached?: boolean;
    unsupressTime?: string;
    componentName?: string;
    componentVersion?: string;
    slaDueDate?: string;
    triageDueDate?: string;
    remediationDueDate?: string;
    underReview?: boolean;
    proposedData?: Array<ProposeFindingActionData>;
    tagsMetaMap?: Record<string, Array<string>>;
    team?: NameIdPair;
    tags?: Array<string>;
    foundOn?: string;
    foundOnDate?: string;
    baseScore?: number;
    impactScore?: number;
    exploitabilityScore?: number;
    publishedDate?: string;
    lastModifiedDate?: string;
    issueResolved?: string;
    toolFindingStatus?: string;
    cvssVector?: string;
    newUrl?: string;
    findingScore?: number;
    armorcodeProjects?: Array<NameIdPair>;
    vendor?: string;
    subProductVersion?: string;
    productVersion?: string;
    mitigatedAt?: string;
};

export namespace FindingSummary {

    export enum severity {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }

    export enum toolSeverity {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }

    export enum analysisType {
        STATIC = 'STATIC',
        DYNAMIC = 'DYNAMIC',
    }


}

