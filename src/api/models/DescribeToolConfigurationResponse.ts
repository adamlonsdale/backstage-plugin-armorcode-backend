/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CoreExecutionLogJpaDto } from './CoreExecutionLogJpaDto';
import type { JsonNode } from './JsonNode';

export type DescribeToolConfigurationResponse = {
    id?: number;
    tool_name?: string;
    product_name?: string;
    sub_product_name?: string;
    product_id?: number;
    sub_product_id?: number;
    environment?: string;
    suspended?: boolean;
    operationalStatus?: DescribeToolConfigurationResponse.operationalStatus;
    frequency?: number;
    frequencyUnit?: string;
    toolFields?: JsonNode;
    executionLogs?: Array<CoreExecutionLogJpaDto>;
};

export namespace DescribeToolConfigurationResponse {

    export enum operationalStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        PARTIAL = 'PARTIAL',
        CONFIG_ERROR = 'CONFIG_ERROR',
        NOT_CONFIGURED = 'NOT_CONFIGURED',
    }


}

