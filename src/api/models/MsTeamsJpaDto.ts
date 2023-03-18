/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MsTeamsJpaDto = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    tenant?: number;
    businessUnitId?: number;
    teamId?: string;
    teamName?: string;
    channels?: Record<string, string>;
    configId?: number;
    apId?: number;
    aspId?: number;
    aeId?: number;
    aeName?: string;
    notificationLevels?: Record<string, Array<string>>;
    type?: string;
    enabled?: boolean;
    webhookUrl?: string;
    deleted?: boolean;
    published?: boolean;
};

