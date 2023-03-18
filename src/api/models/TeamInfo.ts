/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BuProductInfo } from './BuProductInfo';

export type TeamInfo = {
    teamId?: number;
    teamName?: string;
    canBeModified?: boolean;
    role?: string;
    roleId?: number;
    properties?: Array<BuProductInfo>;
};

