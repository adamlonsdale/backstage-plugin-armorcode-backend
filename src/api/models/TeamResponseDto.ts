/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SlackMappingResponseDto } from './SlackMappingResponseDto';
import type { TeamBusinessUnitAssociationResponseDto } from './TeamBusinessUnitAssociationResponseDto';
import type { TeamUserAssociationResponseDto } from './TeamUserAssociationResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type TeamResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
    level?: TeamResponseDto.level;
    leader?: UserResponseDto;
    emailAlias?: string;
    slackConfigDto?: SlackMappingResponseDto;
    accessOnAllBusinessUnits?: boolean;
    businessOwner?: UserResponseDto;
    supportOwner?: UserResponseDto;
    securityOwner?: UserResponseDto;
    engineeringOwner?: UserResponseDto;
    complianceOwner?: UserResponseDto;
    buUnitAssociationJpaDtos?: Array<TeamBusinessUnitAssociationResponseDto>;
    members?: Array<TeamUserAssociationResponseDto>;
};

export namespace TeamResponseDto {

    export enum level {
        TENANT = 'TENANT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }


}

