/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuditLogResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    user?: string;
    entityId?: number;
    entityName?: string;
    revisionType?: AuditLogResponseDto.revisionType;
    propertyName?: string;
    message?: string;
    clientIp?: string;
    auditLogLevel?: AuditLogResponseDto.auditLogLevel;
};

export namespace AuditLogResponseDto {

    export enum revisionType {
        LOGGED_IN = 'LOGGED_IN',
        LOGGED_OUT = 'LOGGED_OUT',
        SESSION_TIME_OUT = 'SESSION_TIME_OUT',
        CREATED = 'CREATED',
        UPDATED = 'UPDATED',
        DELETED = 'DELETED',
        ADDED = 'ADDED',
        REMOVED = 'REMOVED',
        REQUESTED = 'REQUESTED',
        DOWNLOADED = 'DOWNLOADED',
    }

    export enum auditLogLevel {
        ALL = 'ALL',
        TENANT_LEVEL = 'TENANT_LEVEL',
        BUSINESS_UNIT_LEVEL = 'BUSINESS_UNIT_LEVEL',
    }


}

