/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SlackMappingResponseDto = {
    id?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    apId?: number;
    aspId?: number;
    aeId?: number;
    aeName?: string;
    enabled?: boolean;
    channels?: Record<string, string>;
    notificationLevels?: Record<string, Array<string>>;
    score?: number;
    type?: SlackMappingResponseDto.type;
    workspace?: number;
};

export namespace SlackMappingResponseDto {

    export enum type {
        RUNBOOK = 'RUNBOOK',
        TEAM = 'TEAM',
        SAVED_SEARCH = 'SAVED_SEARCH',
        OTHERS = 'OTHERS',
    }


}

