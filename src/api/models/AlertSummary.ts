/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameIdPair } from './NameIdPair';

export type AlertSummary = {
    id?: string;
    severity?: AlertSummary.severity;
    status?: AlertSummary.status;
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
};

export namespace AlertSummary {

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

