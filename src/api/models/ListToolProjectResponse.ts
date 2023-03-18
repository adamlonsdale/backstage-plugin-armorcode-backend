/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ToolProject } from './ToolProject';

export type ListToolProjectResponse = {
    projects?: Array<ToolProject>;
    page?: number;
    total?: number;
    next?: boolean;
    pageAfter?: string;
};

