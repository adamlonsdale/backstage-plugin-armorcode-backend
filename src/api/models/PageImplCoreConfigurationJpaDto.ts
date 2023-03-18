/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CoreConfigurationJpaDto } from './CoreConfigurationJpaDto';
import type { PageableObject } from './PageableObject';
import type { Sort } from './Sort';

export type PageImplCoreConfigurationJpaDto = {
    content?: Array<CoreConfigurationJpaDto>;
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

