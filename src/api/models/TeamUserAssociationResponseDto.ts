/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamResponseDto } from './TeamResponseDto';
import type { TenantUserRoleResponseDto } from './TenantUserRoleResponseDto';
import type { UserResponseDto } from './UserResponseDto';

export type TeamUserAssociationResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    user?: UserResponseDto;
    role?: TenantUserRoleResponseDto;
    team?: TeamResponseDto;
};

