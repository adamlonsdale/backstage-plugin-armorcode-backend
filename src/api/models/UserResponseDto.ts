/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganisationResponseDto } from './OrganisationResponseDto';

export type UserResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    providerUserId?: string;
    email?: string;
    enabled?: boolean;
    displayName?: string;
    provider?: string;
    org?: OrganisationResponseDto;
    role?: Array<string>;
    acceptedTerms?: boolean;
};

