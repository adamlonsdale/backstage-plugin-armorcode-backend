/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessUnitTeamResponseDto } from './BusinessUnitTeamResponseDto';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type PageBusinessUnitTeamResponseDto = {
    totalElements?: number;
    totalPages?: number;
    pageable?: PageableObject;
    first?: boolean;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Array<BusinessUnitTeamResponseDto>;
    number?: number;
    empty?: boolean;
};

