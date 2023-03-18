/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateUserNestedRequestData } from './CreateUserNestedRequestData';
import type { TeamInfoRequestDto } from './TeamInfoRequestDto';

export type UpdateUserRequest = {
    name?: string;
    email?: string;
    tenantRole?: string;
    data?: Array<CreateUserNestedRequestData>;
    teamInfo?: Array<TeamInfoRequestDto>;
    disableLogin?: boolean;
    id?: number;
};

