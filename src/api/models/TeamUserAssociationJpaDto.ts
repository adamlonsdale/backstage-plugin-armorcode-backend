/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamJpaDto } from './TeamJpaDto';
import type { TenantUserRoleJpaDto } from './TenantUserRoleJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type TeamUserAssociationJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    user?: UserJpaDto;
    roleDto?: TenantUserRoleJpaDto;
    team?: TeamJpaDto;
    deleted?: boolean;
    published?: boolean;
};

