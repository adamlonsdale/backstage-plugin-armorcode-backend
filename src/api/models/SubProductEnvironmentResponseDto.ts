/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubProductResponseDto } from './SubProductResponseDto';

export type SubProductEnvironmentResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    branch?: string;
    url?: string;
    productId?: number;
    subProductJpaDto?: SubProductResponseDto;
    apTeamId?: number;
    aspTeamId?: number;
};

