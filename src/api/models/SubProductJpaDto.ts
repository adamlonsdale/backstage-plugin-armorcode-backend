/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppsecToolStatus } from './AppsecToolStatus';
import type { GitMonoRepo } from './GitMonoRepo';
import type { ProductJpaDto } from './ProductJpaDto';
import type { SubProductEnvironmentJpaDto } from './SubProductEnvironmentJpaDto';
import type { SubProductTypeJpaDto } from './SubProductTypeJpaDto';
import type { TeamJpaDto } from './TeamJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type SubProductJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    name?: string;
    description?: string;
    product?: ProductJpaDto;
    versionNumber?: string;
    category?: string;
    repoLink?: string;
    repoType?: SubProductJpaDto.repoType;
    environmentDtos?: Array<SubProductEnvironmentJpaDto>;
    technologies?: string;
    programmingLanguage?: string;
    type?: SubProductTypeJpaDto;
    types?: Array<SubProductTypeJpaDto>;
    origin?: string;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    teamDto?: TeamJpaDto;
    publicCloud?: boolean;
    internetFacing?: boolean;
    considerRiskScore?: boolean;
    riskScore?: number;
    confidentialityRequirement?: SubProductJpaDto.confidentialityRequirement;
    confidentiality?: SubProductJpaDto.confidentiality;
    availabilityRequirement?: SubProductJpaDto.availabilityRequirement;
    availability?: SubProductJpaDto.availability;
    attackingVector?: SubProductJpaDto.attackingVector;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    cloneSourceSubProduct?: SubProductJpaDto;
    slaTemplateId?: number;
    gitMonoRepos?: Array<GitMonoRepo>;
    appSecTools?: Array<AppsecToolStatus>;
    includedToolList?: Array<string>;
    excludedToolList?: Array<string>;
    deleted?: boolean;
    published?: boolean;
    complianceRequired?: boolean;
    tags?: Array<string>;
    confidentialityOptions?: string;
};

export namespace SubProductJpaDto {

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

