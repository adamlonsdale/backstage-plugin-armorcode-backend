/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductResponseDto } from './ProductResponseDto';

export type ProductAggregatedResponse = {
    teamId?: number;
    teamName?: string;
    createdAt?: string;
    products?: Array<ProductResponseDto>;
};

