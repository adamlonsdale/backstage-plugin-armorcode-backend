/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Sort } from './Sort';

export type ListToolConfigRequest = {
    filters?: Record<string, Array<any>>;
    toolFilters?: Record<string, Array<any>>;
    toolType?: ListToolConfigRequest.toolType;
    loginId?: number;
    page?: number;
    size?: number;
    sortColumn?: string;
    sortOrder?: string;
    sort?: Sort;
};

export namespace ListToolConfigRequest {

    export enum toolType {
        PULL = 'PULL',
        PUSH = 'PUSH',
        SCAN_UPLOAD = 'SCAN_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }


}

