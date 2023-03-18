/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameIdPair } from './NameIdPair';
import type { ProductResponseDto } from './ProductResponseDto';

export type TeamStatsResponse = {
    id?: number;
    name?: string;
    members?: number;
    riskScore?: number;
    risk?: TeamStatsResponse.risk;
    riskTrend?: number;
    products?: Array<ProductResponseDto>;
    businessOwner?: NameIdPair;
    engineeringOwner?: NameIdPair;
    securityOwner?: NameIdPair;
    complianceOwner?: NameIdPair;
    supportOwner?: NameIdPair;
};

export namespace TeamStatsResponse {

    export enum risk {
        INFO = 'INFO',
        LOW = 'LOW',
        MEDIUM = 'MEDIUM',
        HIGH = 'HIGH',
        CRITICAL = 'CRITICAL',
        UNKNOWN = 'UNKNOWN',
    }


}

