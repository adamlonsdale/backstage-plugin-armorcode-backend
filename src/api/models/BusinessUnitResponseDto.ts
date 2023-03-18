/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonNode } from './JsonNode';

export type BusinessUnitResponseDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    name?: string;
    description?: string;
    displaySequenceNum?: number;
    uniqueSequenceId?: string;
    config?: Record<string, JsonNode>;
    deleted?: boolean;
    published?: boolean;
};

