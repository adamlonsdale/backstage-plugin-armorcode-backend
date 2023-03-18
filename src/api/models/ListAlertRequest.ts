/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListAlertRequest = {
    id?: string;
    severity?: Array<'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO'>;
    product?: Array<number>;
    subProduct?: Array<number>;
    environment?: Array<string>;
    armorcodeTicketId?: Array<string>;
    sourceName?: Array<'GITHUB' | 'GITLAB' | 'BITBUCKET' | 'INTEGRATION' | 'REPORT' | 'ALERT' | 'NOTIFICATION' | 'FAILEDLOGIN'>;
    status?: Array<'OPEN' | 'PROGRESS' | 'CLOSED'>;
    createdAt?: Array<string>;
    title?: string;
};

