/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';
import type { ToolConfigHistoryResponse } from './ToolConfigHistoryResponse';

export type PageToolConfigHistoryResponse = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<ToolConfigHistoryResponse>;
    number?: number;
    empty?: boolean;
};

