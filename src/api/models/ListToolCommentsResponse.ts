/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';
import type { ToolCommentSummary } from './ToolCommentSummary';

export type ListToolCommentsResponse = {
    content?: Array<ToolCommentSummary>;
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

