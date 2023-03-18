/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSubProductMap } from './ProductSubProductMap';

export type BuProductInfo = {
    buId?: number;
    buName?: string;
    accessOnAllProduct?: boolean;
    productSubProductMap?: Array<ProductSubProductMap>;
};

