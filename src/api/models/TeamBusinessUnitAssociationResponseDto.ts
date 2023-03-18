/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductResponseDto } from './ProductResponseDto';
import type { TeamResponseDto } from './TeamResponseDto';

export type TeamBusinessUnitAssociationResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    productsList?: Array<ProductResponseDto>;
    team?: TeamResponseDto;
    accessOnAllProduct?: boolean;
    businessUnitId?: number;
};

