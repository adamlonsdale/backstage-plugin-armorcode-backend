/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvironmentTypeResponseDto } from './EnvironmentTypeResponseDto';
import type { ProductTypeResponseDto } from './ProductTypeResponseDto';
import type { SubProductResponseDto } from './SubProductResponseDto';
import type { TeamResponseDto } from './TeamResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type ProductResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    type?: ProductTypeResponseDto;
    types?: Array<ProductTypeResponseDto>;
    description?: string;
    status?: string;
    versionNumber?: string;
    environment?: EnvironmentTypeResponseDto;
    classType?: string;
    hostedCloud?: string;
    tier?: string;
    businessOwner?: UserResponseDto;
    securityOwner?: UserResponseDto;
    supportOwner?: UserResponseDto;
    engineeringOwner?: UserResponseDto;
    complianceOwner?: UserResponseDto;
    publicCloud?: boolean;
    internetFacing?: boolean;
    riskScore?: number;
    confidentialityRequirement?: ProductResponseDto.confidentialityRequirement;
    confidentiality?: ProductResponseDto.confidentiality;
    availabilityRequirement?: ProductResponseDto.availabilityRequirement;
    availability?: ProductResponseDto.availability;
    attackingVector?: ProductResponseDto.attackingVector;
    slaTemplateId?: number;
    complianceRequired?: boolean;
    tags?: Array<string>;
    teamDto?: TeamResponseDto;
    subProductJpaDtos?: Array<SubProductResponseDto>;
    dependentSubProductJpaDtos?: Array<SubProductResponseDto>;
    confidentialityOptions?: string;
};

export namespace ProductResponseDto {

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

