/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditLogResponseDto } from './AuditLogResponseDto';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type PageAuditLogResponseDto = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<AuditLogResponseDto>;
    number?: number;
    empty?: boolean;
};

