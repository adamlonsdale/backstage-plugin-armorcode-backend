/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SlackMappingJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    apId?: number;
    aspId?: number;
    aeId?: number;
    aeName?: string;
    enabled?: boolean;
    channels?: Record<string, string>;
    notificationLevels?: Record<string, Array<string>>;
    score?: number;
    type?: SlackMappingJpaDto.type;
    workspace?: number;
    deleted?: boolean;
    published?: boolean;
};

export namespace SlackMappingJpaDto {

    export enum type {
        RUNBOOK = 'RUNBOOK',
        TEAM = 'TEAM',
        SAVED_SEARCH = 'SAVED_SEARCH',
        OTHERS = 'OTHERS',
    }


}

