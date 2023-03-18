/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSubProductId } from './ProductSubProductId';
import type { TeamJpaDto } from './TeamJpaDto';

export type TeamBusinessUnitAssociationJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    productSubProductMap?: Array<ProductSubProductId>;
    team?: TeamJpaDto;
    accessOnAllProduct?: boolean;
    deleted?: boolean;
    published?: boolean;
};

