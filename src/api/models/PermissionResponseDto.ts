/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionResponseDto } from './ActionResponseDto';

export type PermissionResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    subCategory?: string;
    category?: string;
    actionList?: Array<ActionResponseDto>;
};

