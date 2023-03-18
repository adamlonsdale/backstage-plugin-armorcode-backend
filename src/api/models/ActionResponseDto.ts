/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionResponseDto } from './PermissionResponseDto';

export type ActionResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    url?: string;
    description?: string;
    operation?: ActionResponseDto.operation;
    method?: ActionResponseDto.method;
    expose?: boolean;
    permissionSet?: Array<PermissionResponseDto>;
};

export namespace ActionResponseDto {

    export enum operation {
        READ = 'READ',
        WRITE = 'WRITE',
        DELETE = 'DELETE',
    }

    export enum method {
        GET = 'GET',
        HEAD = 'HEAD',
        POST = 'POST',
        PUT = 'PUT',
        PATCH = 'PATCH',
        DELETE = 'DELETE',
        OPTIONS = 'OPTIONS',
        TRACE = 'TRACE',
    }


}

