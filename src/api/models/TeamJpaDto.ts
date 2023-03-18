/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MsTeamsJpaDto } from './MsTeamsJpaDto';
import type { SlackMappingJpaDto } from './SlackMappingJpaDto';
import type { TeamBusinessUnitAssociationJpaDto } from './TeamBusinessUnitAssociationJpaDto';
import type { TeamUserAssociationJpaDto } from './TeamUserAssociationJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type TeamJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    name?: string;
    description?: string;
    level?: TeamJpaDto.level;
    buUnitAssociationJpaDtos?: Array<TeamBusinessUnitAssociationJpaDto>;
    members?: Array<TeamUserAssociationJpaDto>;
    leader?: UserJpaDto;
    emailAlias?: string;
    slackConfigDto?: SlackMappingJpaDto;
    accessOnAllBusinessUnits?: boolean;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    tagList?: Array<string>;
    msTeamDto?: MsTeamsJpaDto;
    deleted?: boolean;
    published?: boolean;
};

export namespace TeamJpaDto {

    export enum level {
        TENANT = 'TENANT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }


}

