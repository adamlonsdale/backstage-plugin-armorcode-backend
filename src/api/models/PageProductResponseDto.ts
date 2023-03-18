/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageableObject } from './PageableObject';
import type { ProductResponseDto } from './ProductResponseDto';
import type { Sort } from './Sort';

export type PageProductResponseDto = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<ProductResponseDto>;
    number?: number;
    empty?: boolean;
};

