/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonNode } from './JsonNode';

export type BusinessUnitUpdateDto = {
    name: string;
    description: string;
    config?: Record<string, JsonNode>;
    id: number;
};

