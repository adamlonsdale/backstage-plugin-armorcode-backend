/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListProductRequest = {
    teamInfo?: boolean;
    environmentName?: ListProductRequest.environmentName;
    riskTrendInfo?: boolean;
    riskScoreDate?: string;
    buId?: number;
    pageSize?: number;
    pageNumber?: number;
    trendDayDiff?: number;
};

export namespace ListProductRequest {

    export enum environmentName {
        PRODUCTION = 'PRODUCTION',
        STAGING = 'STAGING',
    }


}

