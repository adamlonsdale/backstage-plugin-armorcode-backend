/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSubProductId } from './ProductSubProductId';

export type CreateUserNestedRequestData = {
    businessUnitId?: number;
    productSubProductMap?: Array<ProductSubProductId>;
    role?: string;
    accessOnAllProduct?: boolean;
};

