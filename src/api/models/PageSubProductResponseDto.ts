/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';
import type { SubProductResponseDto } from './SubProductResponseDto';

export type PageSubProductResponseDto = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<SubProductResponseDto>;
    number?: number;
    empty?: boolean;
};

