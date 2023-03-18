/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubProductJpaDto } from './SubProductJpaDto';

export type SubProductEnvironmentJpaDto = {
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
    branch?: string;
    url?: string;
    productId?: number;
    subProductJpaDto?: SubProductJpaDto;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    apTeamId?: number;
    aspTeamId?: number;
    deleted?: boolean;
    published?: boolean;
};

