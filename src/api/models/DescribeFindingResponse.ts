/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EndPointDetails } from './EndPointDetails';
import type { FindingSourceSummary } from './FindingSourceSummary';
import type { NameIdPair } from './NameIdPair';
import type { ProposeFindingActionData } from './ProposeFindingActionData';
import type { RuleRef } from './RuleRef';
import type { SourceCodeDetails } from './SourceCodeDetails';
import type { StringNameIdPair } from './StringNameIdPair';
import type { TicketSummary } from './TicketSummary';

export type DescribeFindingResponse = {
    sourceId?: string;
    title?: string;
    severity?: DescribeFindingResponse.severity;
    category?: string;
    date?: string;
    ruleRefs?: Array<RuleRef>;
    impact?: string;
    mitigation?: string;
    severityDesc?: string;
    description?: string;
    stepsToReproduce?: string;
    evidence?: string;
    refs?: Array<string>;
    analysisType?: DescribeFindingResponse.analysisType;
    sourceCodeDetails?: SourceCodeDetails;
    endPointDetails?: EndPointDetails;
    toolId?: string;
    toolName?: string;
    similarFindings?: Array<string>;
    additionalDetails?: Record<string, any>;
    ruleKey?: Array<string>;
    appId?: number;
    appName?: string;
    envId?: number;
    envName?: string;
    source?: FindingSourceSummary;
    policy?: Array<string>;
    status?: string;
    productStatus?: string;
    product?: NameIdPair;
    subProduct?: NameIdPair;
    mitigated?: boolean;
    id?: number;
    toolSeverity?: DescribeFindingResponse.toolSeverity;
    securityOwner?: NameIdPair;
    developer?: string;
    developerName?: string;
    findingCategory?: string;
    armorcodeTicket?: Array<TicketSummary>;
    armorcodeProjects?: Array<NameIdPair>;
    owner?: NameIdPair;
    testType?: string;
    attachments?: Array<StringNameIdPair>;
    slaBreached?: boolean;
    scanType?: string;
    unsupresTime?: string;
    componentName?: string;
    componentVersion?: string;
    slaDueDate?: string;
    proposedData?: Array<ProposeFindingActionData>;
    underReview?: boolean;
    tags?: Array<string>;
    cwes?: Array<number>;
    cves?: Array<string>;
    tagsMetaMap?: Record<string, Array<string>>;
    foundOn?: string;
    mitigatedAt?: string;
    foundOnDate?: string;
    toolFindingStatus?: string;
    baseScore?: number;
    cvssVector?: string;
    newUrl?: string;
    vendor?: string;
    subProductVersion?: string;
    productVersion?: string;
    impactScore?: number;
    exploitabilityScore?: number;
    triageDueDate?: string;
    remediationDueDate?: string;
    lastUpdatedAt?: string;
    fixability?: string;
    hostName?: string;
    imageName?: string;
    team?: NameIdPair;
};

export namespace DescribeFindingResponse {

    export enum severity {
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

    export enum toolSeverity {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }


}

