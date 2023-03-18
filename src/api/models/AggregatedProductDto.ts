/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductResponseDto } from './ProductResponseDto';

export type AggregatedProductDto = {
    entityName?: string;
    entityId?: number;
    createdAt?: string;
    products?: Array<ProductResponseDto>;
};

