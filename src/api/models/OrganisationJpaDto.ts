/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDomainJpaDto } from './AccountDomainJpaDto';

export type OrganisationJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    name?: string;
    alias?: string;
    paid?: boolean;
    blockProvider?: Array<'GOOGLE' | 'AZURE' | 'OKTA' | 'PINGIDENTITY' | 'BASIC_AUTH'>;
    useTeams?: boolean;
    godAccessible?: boolean;
    type?: string;
    domainNames?: Array<AccountDomainJpaDto>;
    deleted?: boolean;
    published?: boolean;
};

