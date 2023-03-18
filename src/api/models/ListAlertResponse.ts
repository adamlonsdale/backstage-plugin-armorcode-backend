/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlertSummary } from './AlertSummary';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type ListAlertResponse = {
    content?: Array<AlertSummary>;
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

