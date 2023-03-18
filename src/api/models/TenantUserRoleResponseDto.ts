/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionResponseDto } from './PermissionResponseDto';

export type TenantUserRoleResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    role?: string;
    description?: string;
    defaultDashboard?: string;
    outOfBox?: boolean;
    permissionSet?: Array<PermissionResponseDto>;
};

