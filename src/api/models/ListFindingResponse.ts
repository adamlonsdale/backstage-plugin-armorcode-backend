/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FindingSummary } from './FindingSummary';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type ListFindingResponse = {
    content?: Array<FindingSummary>;
    pageable?: PageableObject;
    totalElements?: number;
    totalPages?: number;
    last?: boolean;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    size?: number;
    number?: number;
    empty?: boolean;
};

