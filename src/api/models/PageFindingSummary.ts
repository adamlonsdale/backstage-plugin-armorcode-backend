/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FindingSummary } from './FindingSummary';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type PageFindingSummary = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<FindingSummary>;
    number?: number;
    empty?: boolean;
};

