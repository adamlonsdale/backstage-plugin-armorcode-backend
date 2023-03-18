/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserJpaDto } from './UserJpaDto';

export type TeamMemberRequestNestedDto = {
    id?: number;
    user?: UserJpaDto;
    role?: string;
    enableLogin?: boolean;
};

