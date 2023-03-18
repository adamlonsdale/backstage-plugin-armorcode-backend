/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuditLogFilter = {
    revisionType?: Array<'LOGGED_IN' | 'LOGGED_OUT' | 'SESSION_TIME_OUT' | 'CREATED' | 'UPDATED' | 'DELETED' | 'ADDED' | 'REMOVED' | 'REQUESTED' | 'DOWNLOADED'>;
    user?: Array<string>;
    entityName?: Array<string>;
    ipAddress?: Array<string>;
    startDate?: number;
    endDate?: number;
    ignoreUserList?: Array<string>;
};

