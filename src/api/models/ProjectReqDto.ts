/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentsJpaDto } from './DocumentsJpaDto';
import type { UserJpaDto } from './UserJpaDto';

export type ProjectReqDto = {
    name: string;
    description: string;
    type?: string;
    recurring?: boolean;
    startDate?: string;
    endDate?: string;
    status?: string;
    createTicket?: boolean;
    repoLink?: string;
    versionNumber?: string;
    category?: string;
    tags?: Array<string>;
    notes?: string;
    projectOwner?: UserJpaDto;
    securityOwner?: UserJpaDto;
    engineeringOwner?: UserJpaDto;
    devOwner?: UserJpaDto;
    businessOwner?: UserJpaDto;
    supportOwner?: UserJpaDto;
    complianceOwner?: UserJpaDto;
    documents?: Array<DocumentsJpaDto>;
};

