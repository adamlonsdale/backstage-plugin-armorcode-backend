/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sort } from './Sort';

export type PageableObject = {
    pageNumber?: number;
    pageSize?: number;
    sort?: Sort;
    paged?: boolean;
    unpaged?: boolean;
    offset?: number;
};

