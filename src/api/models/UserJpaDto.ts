/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganisationJpaDto } from './OrganisationJpaDto';
import type { UserOrganisationMappingJpaDto } from './UserOrganisationMappingJpaDto';
import type { UserResourceMappingJpaDto } from './UserResourceMappingJpaDto';

export type UserJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    providerUserId?: string;
    email?: string;
    enabled?: boolean;
    displayName?: string;
    password?: string;
    provider?: string;
    org?: OrganisationJpaDto;
    role?: Array<string>;
    blockProviderSet?: Array<'GOOGLE' | 'AZURE' | 'OKTA' | 'PINGIDENTITY' | 'BASIC_AUTH'>;
    acceptedTerms?: boolean;
    userOrgAsscociation?: Array<UserOrganisationMappingJpaDto>;
    mappingDtos?: Array<UserResourceMappingJpaDto>;
    deleted?: boolean;
    published?: boolean;
};

