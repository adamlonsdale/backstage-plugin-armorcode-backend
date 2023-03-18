/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubProductEsDto = {
    id?: string;
    createdAtDate?: string;
    updatedAtDate?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    updateSource?: string;
    tenant?: number;
    businessUnitId?: number;
    name?: string;
    description?: string;
    versionNumber?: string;
    category?: string;
    repoLink?: string;
    repoType?: string;
    technologies?: string;
    programmingLanguage?: string;
    type?: number;
    types?: Array<number>;
    origin?: string;
    businessOwner?: number;
    businessOwnerName?: string;
    businessOwnerEmail?: string;
    securityOwner?: number;
    securityOwnerName?: string;
    securityOwnerEmail?: string;
    engineeringOwner?: number;
    engineeringOwnerName?: string;
    engineeringOwnerEmail?: string;
    supportOwner?: number;
    supportOwnerName?: string;
    supportOwnerEmail?: string;
    complianceOwner?: number;
    complianceOwnerName?: string;
    complianceOwnerEmail?: string;
    teamId?: number;
    teamName?: string;
    complianceRequired?: boolean;
    publicCloud?: boolean;
    internetFacing?: boolean;
    parent?: number;
    parentName?: string;
    score?: number;
    risk?: SubProductEsDto.risk;
    confidentialityRequirement?: SubProductEsDto.confidentialityRequirement;
    confidentiality?: SubProductEsDto.confidentiality;
    availabilityRequirement?: SubProductEsDto.availabilityRequirement;
    availability?: SubProductEsDto.availability;
    attackingVector?: SubProductEsDto.attackingVector;
    confidentialityOptions?: string;
    impact?: number;
    likelihood?: number;
    tags?: string;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    cloneSourceSubProductId?: number;
    cloneSourceSubProductName?: string;
    deleted?: boolean;
    published?: boolean;
};

export namespace SubProductEsDto {

    export enum risk {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }

    export enum confidentialityRequirement {
        LOW = 'Low',
        MEDIUM = 'Medium',
        HIGH = 'High',
        NOT_DEFINED = 'Not Defined',
    }

    export enum confidentiality {
        ALL = 'All',
        ONE = 'One',
        TWO = 'Two',
        NONE = 'None',
    }

    export enum availabilityRequirement {
        LOW = 'Low',
        MEDIUM = 'Medium',
        HIGH = 'High',
        NOT_DEFINED = 'Not Defined',
    }

    export enum availability {
        NONE = 'None',
        LOW = 'Low',
        HIGH = 'High',
        NOT_DEFINED = 'Not Defined',
    }

    export enum attackingVector {
        NETWORK = 'Network',
        LOCAL = 'Local',
    }


}

