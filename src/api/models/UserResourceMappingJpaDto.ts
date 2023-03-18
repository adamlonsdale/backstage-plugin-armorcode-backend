/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamJpaDto } from './TeamJpaDto';
import type { TenantUserRoleJpaDto } from './TenantUserRoleJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type UserResourceMappingJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    teamDto?: TeamJpaDto;
    roleDto?: TenantUserRoleJpaDto;
    roleName?: string;
    accessLevel?: UserResourceMappingJpaDto.accessLevel;
    disableLogin?: boolean;
    userDto?: UserJpaDto;
    deleted?: boolean;
    published?: boolean;
};

export namespace UserResourceMappingJpaDto {

    export enum accessLevel {
        TEAM = 'TEAM',
        TENANT = 'TENANT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }


}

