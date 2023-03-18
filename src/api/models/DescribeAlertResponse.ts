/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameIdPair } from './NameIdPair';

export type DescribeAlertResponse = {
    id?: string;
    severity?: DescribeAlertResponse.severity;
    status?: DescribeAlertResponse.status;
    armorcodeTicketId?: string;
    ticketUrl?: string;
    title?: string;
    description?: string;
    product?: NameIdPair;
    subProduct?: NameIdPair;
    environment?: NameIdPair;
    createdAt?: string;
    updatedAt?: string;
    assignee?: NameIdPair;
    sourceName?: string;
    sourceId?: number;
    ticketSource?: string;
    watchers?: Array<NameIdPair>;
    createdBy?: string;
    ticketId?: string;
};

export namespace DescribeAlertResponse {

    export enum severity {
        CRITICAL = 'CRITICAL',
        HIGH = 'HIGH',
        MEDIUM = 'MEDIUM',
        LOW = 'LOW',
        INFO = 'INFO',
    }

    export enum status {
        OPEN = 'OPEN',
        PROGRESS = 'PROGRESS',
        CLOSED = 'CLOSED',
    }


}

