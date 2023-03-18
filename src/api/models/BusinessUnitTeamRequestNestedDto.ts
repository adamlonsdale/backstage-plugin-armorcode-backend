/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSubProductId } from './ProductSubProductId';

export type BusinessUnitTeamRequestNestedDto = {
    id?: number;
    businessUnitId?: number;
    productSubProductMap?: Array<ProductSubProductId>;
    accessOnAllProduct?: boolean;
};

