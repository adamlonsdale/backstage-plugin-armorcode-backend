/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessUnitTeamRequestNestedDto } from './BusinessUnitTeamRequestNestedDto';
import type { StringNameIdPair } from './StringNameIdPair';
import type { TeamMemberRequestNestedDto } from './TeamMemberRequestNestedDto';
import type { UserJpaDto } from './UserJpaDto';

export type TeamUpdateRequestDto = {
    name: string;
    description?: string;
    properties?: Array<BusinessUnitTeamRequestNestedDto>;
    members?: Array<TeamMemberRequestNestedDto>;
    lead?: UserJpaDto;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    emailAlias?: string;
    channels?: Record<string, string>;
    workspaceId?: number;
    accessOnAllBusinessUnits?: boolean;
    msTeamsLoginId?: number;
    msTeamsTeam?: StringNameIdPair;
    msTeamsChannel?: Array<StringNameIdPair>;
    id: number;
    tags?: Array<string>;
};

