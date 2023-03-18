/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSubProductMap } from './ProductSubProductMap';

export type UserResponseNestedData = {
    productSubProductMap?: Array<ProductSubProductMap>;
    businessUnitId?: number;
    businessUnitName?: string;
    role?: string;
    accessOnAllProduct?: boolean;
    canBeModified?: boolean;
};

