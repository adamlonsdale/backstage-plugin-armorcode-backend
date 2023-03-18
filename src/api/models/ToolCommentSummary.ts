/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ToolCommentAttachment } from './ToolCommentAttachment';

export type ToolCommentSummary = {
    id?: string;
    message?: string;
    createdAt?: number;
    updatedAt?: number;
    createdBy?: string;
    bio?: string;
    profileUrl?: string;
    attachments?: Array<ToolCommentAttachment>;
    type?: string;
    hackeroneTriager?: boolean;
    location?: string;
    otherInfo?: Record<string, any>;
};

