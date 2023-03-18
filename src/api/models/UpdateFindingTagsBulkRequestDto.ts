/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateFindingTagsBulkRequestDto = {
    reason?: string;
    notes?: string;
    createTicket?: boolean;
    developer?: string;
    labels?: Array<string>;
    ticketConfigurationId?: number;
    description?: string;
    mitigation?: string;
    stepsToReproduce?: string;
    impact?: string;
    toolId?: string;
    findingCategory?: string;
    toolName?: string;
    ruleKey?: Array<string>;
    cves?: Array<string>;
    cwes?: Array<number>;
    cvssVector?: string;
    cvssScore?: number;
    findingIds?: Array<string>;
    ignoreFindingIds?: Array<string>;
    findingId?: string;
    ticketDescription?: string;
    scope?: UpdateFindingTagsBulkRequestDto.scope;
    applyOnFutureFindings?: boolean;
    updateType?: UpdateFindingTagsBulkRequestDto.updateType;
    contains?: boolean;
    equals?: boolean;
    findingTags?: Array<string>;
};

export namespace UpdateFindingTagsBulkRequestDto {

    export enum scope {
        FINDING = 'FINDING',
        SUBPRODUCT = 'SUBPRODUCT',
        PRODUCT = 'PRODUCT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }

    export enum updateType {
        RULE_BASED = 'RULE_BASED',
        TAG_BASED = 'TAG_BASED',
    }


}

