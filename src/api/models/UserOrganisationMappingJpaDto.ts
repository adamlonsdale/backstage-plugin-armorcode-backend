/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserJpaDto } from './UserJpaDto';

export type UserOrganisationMappingJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    user?: UserJpaDto;
    accessLevel?: UserOrganisationMappingJpaDto.accessLevel;
    disableLogin?: boolean;
    teamId?: number;
    roleId?: number;
    role?: string;
    deleted?: boolean;
    published?: boolean;
};

export namespace UserOrganisationMappingJpaDto {

    export enum accessLevel {
        TEAM = 'TEAM',
        TENANT = 'TENANT',
        BUSINESS_UNIT = 'BUSINESS_UNIT',
    }


}

