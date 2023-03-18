/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameIdPair } from './NameIdPair';
import type { ProductSubProductMap } from './ProductSubProductMap';

export type BusinessUnitTeamResponseNestedDto = {
    id?: number;
    businessUnit?: NameIdPair;
    productSubProductMap?: Array<ProductSubProductMap>;
    accessOnAllProduct?: boolean;
};

