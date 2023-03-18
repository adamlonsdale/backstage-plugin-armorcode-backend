/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppsecToolStatus } from './AppsecToolStatus';
import type { GitMonoRepo } from './GitMonoRepo';
import type { ProductResponseDto } from './ProductResponseDto';
import type { SubProductEnvironmentResponseDto } from './SubProductEnvironmentResponseDto';
import type { SubProductTypeResponseDto } from './SubProductTypeResponseDto';
import type { TeamResponseDto } from './TeamResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type SubProductResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
    product?: ProductResponseDto;
    versionNumber?: string;
    category?: string;
    repoLink?: string;
    repoType?: SubProductResponseDto.repoType;
    environmentDtos?: Array<SubProductEnvironmentResponseDto>;
    technologies?: string;
    programmingLanguage?: string;
    type?: SubProductTypeResponseDto;
    types?: Array<SubProductTypeResponseDto>;
    origin?: string;
    businessOwner?: UserResponseDto;
    supportOwner?: UserResponseDto;
    securityOwner?: UserResponseDto;
    engineeringOwner?: UserResponseDto;
    complianceOwner?: UserResponseDto;
    teamDto?: TeamResponseDto;
    publicCloud?: boolean;
    internetFacing?: boolean;
    considerRiskScore?: boolean;
    riskScore?: number;
    confidentialityRequirement?: SubProductResponseDto.confidentialityRequirement;
    confidentiality?: SubProductResponseDto.confidentiality;
    availabilityRequirement?: SubProductResponseDto.availabilityRequirement;
    availability?: SubProductResponseDto.availability;
    attackingVector?: SubProductResponseDto.attackingVector;
    includedToolList?: Array<string>;
    excludedToolList?: Array<string>;
    cloneSourceSubProduct?: SubProductResponseDto;
    slaTemplateId?: number;
    gitMonoRepos?: Array<GitMonoRepo>;
    appSecTools?: Array<AppsecToolStatus>;
    riskTrend?: number;
    complianceRequired?: boolean;
    tags?: Array<string>;
    confidentialityOptions?: string;
};

export namespace SubProductResponseDto {

    export enum repoType {
        GITHUB = 'GITHUB',
        GITLAB = 'GITLAB',
        BITBUCKET = 'BITBUCKET',
        SVN = 'SVN',
        AZURE_REPOS = 'AZURE_REPOS',
        OTHER = 'other',
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

