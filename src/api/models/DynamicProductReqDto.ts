/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DynamicProductReqDto = {
    fields?: Array<'id' | 'name' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy' | 'status'>;
    filters?: Record<string, Array<any>>;
    buIds?: Array<number>;
};

