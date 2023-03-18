/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessUnitTeamResponseNestedDto } from './BusinessUnitTeamResponseNestedDto';
import type { MemberNestedResponseData } from './MemberNestedResponseData';
import type { NameIdPair } from './NameIdPair';
import type { SlackMappingJpaDto } from './SlackMappingJpaDto';
import type { StringNameIdPair } from './StringNameIdPair';
import type { UserJpaDto } from './UserJpaDto';

export type BusinessUnitTeamResponseDto = {
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
    level?: BusinessUnitTeamResponseDto.level;
    properties?: Array<BusinessUnitTeamResponseNestedDto>;
    members?: Array<MemberNestedResponseData>;
    lead?: UserJpaDto;
    hasAccess?: boolean;
    emailAlias?: string;
    slackConfigId?: SlackMappingJpaDto;
    msTeamsLoginId?: number;
    msTeamsTeam?: StringNameIdPair;
    msTeamsChannel?: Array<StringNameIdPair>;
    accessOnAllBusinessUnits?: boolean;
    deleted?: boolean;
    published?: boolean;
    tags?: Array<string>;
    securityOwner?: NameIdPair;
    complianceOwner?: NameIdPair;
    engineeringOwner?: NameIdPair;
    supportOwner?: NameIdPair;
    businessOwner?: NameIdPair;
};

export namespace BusinessUnitTeamResponseDto {

    export enum level {
        TENANT = 'TENANT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }


}

