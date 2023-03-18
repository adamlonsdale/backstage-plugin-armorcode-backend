/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListToolProjectRequest = {
    page?: number;
    size?: number;
    name?: string;
    type?: string;
    config?: Record<string, any>;
    login_id?: number;
    extraConfig?: Record<string, any>;
    organisation?: string;
    project?: string;
    pageAfter?: string;
};

