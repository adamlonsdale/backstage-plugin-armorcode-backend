/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvironmentTypeJpaDto } from './EnvironmentTypeJpaDto';
import type { ProductTypeJpaDto } from './ProductTypeJpaDto';
import type { SubProductJpaDto } from './SubProductJpaDto';
import type { TeamJpaDto } from './TeamJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type ProductJpaDto = {
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
    type?: ProductTypeJpaDto;
    types?: Array<ProductTypeJpaDto>;
    description?: string;
    status?: string;
    versionNumber?: string;
    environment?: EnvironmentTypeJpaDto;
    classType?: string;
    hostedCloud?: string;
    tier?: string;
    businessOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    teamDto?: TeamJpaDto;
    subProductJpaDtos?: Array<SubProductJpaDto>;
    publicCloud?: boolean;
    internetFacing?: boolean;
    riskScore?: number;
    confidentialityRequirement?: ProductJpaDto.confidentialityRequirement;
    confidentiality?: ProductJpaDto.confidentiality;
    availabilityRequirement?: ProductJpaDto.availabilityRequirement;
    availability?: ProductJpaDto.availability;
    attackingVector?: ProductJpaDto.attackingVector;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    slaTemplateId?: number;
    deleted?: boolean;
    published?: boolean;
    complianceRequired?: boolean;
    tags?: Array<string>;
    confidentialityOptions?: string;
};

export namespace ProductJpaDto {

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

