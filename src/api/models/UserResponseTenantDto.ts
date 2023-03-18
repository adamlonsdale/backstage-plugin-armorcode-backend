/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamInfo } from './TeamInfo';
import type { UserResponseNestedData } from './UserResponseNestedData';

export type UserResponseTenantDto = {
    userId?: number;
    email?: string;
    tenantRole?: string;
    name?: string;
    data?: Array<UserResponseNestedData>;
    canBeModified?: boolean;
    disableLogin?: boolean;
    lastlogin?: string;
    teamInfo?: Array<TeamInfo>;
};

