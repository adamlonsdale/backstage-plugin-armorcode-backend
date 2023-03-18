/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionJpaDto } from './PermissionJpaDto';

export type TenantUserRoleJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    role?: string;
    description?: string;
    defaultDashboard?: string;
    outOfBox?: boolean;
    permissionSet?: Array<PermissionJpaDto>;
    deleted?: boolean;
    published?: boolean;
};

