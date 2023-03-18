/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSONObject } from './JSONObject';

export type ToolProject = {
    name?: string;
    id?: string;
    versions?: Array<string>;
    projectStatus?: ToolProject.projectStatus;
    otherProperties?: Record<string, any>;
    tags?: JSONObject;
};

export namespace ToolProject {

    export enum projectStatus {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}

