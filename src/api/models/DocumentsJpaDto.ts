/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectJpaDto } from './ProjectJpaDto';

export type DocumentsJpaDto = {
    id?: number;
    fileName?: string;
    signedUploadUrl?: string;
    signedDownloadUrl?: string;
    signedDeleteUrl?: string;
    description?: string;
    title?: string;
    tenant?: number;
    businessUnitId?: number;
    keyName?: string;
    projectId?: ProjectJpaDto;
};

