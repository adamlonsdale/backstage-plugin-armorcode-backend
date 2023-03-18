/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserJpaDto } from './UserJpaDto';

export type ProjectJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    name?: string;
    description?: string;
    type?: string;
    recurring?: boolean;
    startDate?: string;
    endDate?: string;
    status?: string;
    createTicket?: boolean;
    repoLink?: string;
    versionNumber?: string;
    category?: string;
    tags?: Array<string>;
    notes?: string;
    projectOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    devOwner?: UserJpaDto;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    deleted?: boolean;
    published?: boolean;
};

