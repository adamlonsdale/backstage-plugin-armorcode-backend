/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductJpaDto } from './ProductJpaDto';
import type { SubProductEnvironmentJpaDto } from './SubProductEnvironmentJpaDto';
import type { SubProductTypeJpaDto } from './SubProductTypeJpaDto';
import type { TeamJpaDto } from './TeamJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type SubProductReqDto = {
    name: string;
    description?: string;
    product: ProductJpaDto;
    versionNumber?: string;
    category?: string;
    repoLink?: string;
    repoType?: SubProductReqDto.repoType;
    repoToken?: string;
    environments?: Array<SubProductEnvironmentJpaDto>;
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
    complianceRequired?: boolean;
    confidentialityRequirement?: SubProductReqDto.confidentialityRequirement;
    confidentiality?: SubProductReqDto.confidentiality;
    availabilityRequirement?: SubProductReqDto.availabilityRequirement;
    availability?: SubProductReqDto.availability;
    attackingVector?: SubProductReqDto.attackingVector;
    sourceProductId?: number;
    sourceSubProductId?: number;
    slaTemplateId?: number;
    subProductToolsMap?: Record<string, boolean>;
    tags?: Array<string>;
    confidentialityOptions?: string;
};

export namespace SubProductReqDto {

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

