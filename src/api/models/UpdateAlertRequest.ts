/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAlertRequest = {
    severity: UpdateAlertRequest.severity;
    updateSimilar?: boolean;
};

export namespace UpdateAlertRequest {

    export enum severity {
        CRITICAL = 'CRITICAL',
        HIGH = 'HIGH',
        MEDIUM = 'MEDIUM',
        LOW = 'LOW',
        INFO = 'INFO',
    }


}

