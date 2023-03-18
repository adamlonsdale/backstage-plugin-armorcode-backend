/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductTypeJpaDto } from './ProductTypeJpaDto';
import type { SubProductEnvironmentJpaDto } from './SubProductEnvironmentJpaDto';
import type { TeamJpaDto } from './TeamJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type ProductUpdateReqDto = {
    name: string;
    type: ProductTypeJpaDto;
    types?: Array<ProductTypeJpaDto>;
    description?: string;
    status?: string;
    versionNumber?: string;
    environment?: SubProductEnvironmentJpaDto;
    classType?: string;
    hostedCloud?: string;
    publicCloud?: boolean;
    internetFacing?: boolean;
    complianceRequired?: boolean;
    tier?: string;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    teamDto?: TeamJpaDto;
    confidentialityRequirement?: ProductUpdateReqDto.confidentialityRequirement;
    confidentiality?: ProductUpdateReqDto.confidentiality;
    availabilityRequirement?: ProductUpdateReqDto.availabilityRequirement;
    availability?: ProductUpdateReqDto.availability;
    attackingVector?: ProductUpdateReqDto.attackingVector;
    slaTemplateId?: number;
    id: number;
    tags?: Array<string>;
    confidentialityOptions?: string;
};

export namespace ProductUpdateReqDto {

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

