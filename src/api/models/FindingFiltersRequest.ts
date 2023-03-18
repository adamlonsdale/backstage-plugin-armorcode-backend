/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExportField } from './ExportField';
import type { SortOrder } from './SortOrder';

export type FindingFiltersRequest = {
    filters?: Record<string, Array<any>>;
    andFilters?: Record<string, Array<any>>;
    existsFilters?: Array<'all' | 'product' | 'subProduct' | 'severity' | 'toolSeverity' | 'severityWeight' | 'cwe' | 'cve' | 'cwes' | 'cves' | 'source' | 'status' | 'productStatus' | 'environment' | 'environmentName' | 'action' | 'toolFindingStatus' | 'policy' | 'ruleId' | 'armorcodeTicketIds' | 'id' | 'tid' | 'id_term' | 'scan' | 'mitigatedByScanId' | 'test' | 'developer' | 'developerName' | 'repositoryUrl' | 'repositoryName' | 'productId' | 'title' | 'description' | 'url' | 'newUrl' | 'filePath' | 'armorcodeTicket' | 'newFilePath' | 'componentName' | 'componentNameHash' | 'componentVersion' | 'componentFixVersions' | 'cloudAccountId' | 'toolId' | 'createdAt' | 'lastUpdated' | 'securityOwner' | 'analysisType' | 'newTitle' | 'scanType' | 'armorcodeCategory' | 'findingCategory' | 'toolcategory' | 'category' | 'slaBreached' | 'slaBreachedAt' | 'resolutionSlaBreached' | 'developerSlaBreached' | 'firstResponse' | 'issueResolved' | 'SNYK_exploitMaturity' | 'triageDueDate' | 'remediationDueDate' | 'slaDueDate' | 'findingAge' | 'owner' | 'armorcodeTicketExits' | 'underReview' | 'runbook' | 'proposeAction' | 'proposeBasicChange' | 'proposeCategory' | 'proposeDueDate' | 'proposeSeverity' | 'proposeAssignee' | 'containerImageName' | 'containerImageTag' | 'vmHostOs' | 'vmHostName' | 'vmHostNameSearch' | 'vmHostIP' | 'team' | 'teamId' | 'twistLockScanType' | 'Twistlock_scanType' | 'Twistlock_originType' | 'toolTitle' | 'cluster' | 'tags' | 'keyValue' | 'toolProjectStatus' | 'impactScore' | 'exploitabilityScore' | 'baseScore' | 'findingScore' | 'armorcodeTicketSize' | 'foundOn' | 'foundOnDate' | 'publishedDate' | 'lastModifiedDate' | 'otherProperties' | 'mitigation' | 'impact' | 'line' | 'projectStatusChange' | 'dfSourcefile' | 'slaDueIn' | 'slaPastDue' | 'filePathInsights' | 'armorcodeProjects' | 'aatiScore' | 'fixability' | 'vendor' | 'businessUnit' | 'exploited' | 'armorcodeTicketStatus' | 'unsupressTime' | 'unsupressAfterDuration' | 'aqlQuery'>;
    ignoreMitigated?: boolean;
    page?: number;
    size?: number;
    sortColumn?: string;
    sortOrder?: string;
    exportFields?: Array<ExportField>;
    fields?: Record<string, string>;
    sortColumns?: Array<SortOrder>;
    ticketStatusRequired?: boolean;
};

