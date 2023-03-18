/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProposeFindingActionData = {
    requestActionNote?: string;
    action?: ProposeFindingActionData.action;
    userEmail?: string;
    userName?: string;
    proposedValue?: string;
    proposedOn?: string;
};

export namespace ProposeFindingActionData {

    export enum action {
        PROPOSE_ACTION = 'PROPOSE_ACTION',
        PROPOSE_BASIC_CHANGE = 'PROPOSE_BASIC_CHANGE',
        PROPOSE_ASSIGNEE = 'PROPOSE_ASSIGNEE',
        PROPOSE_DUE_DATE = 'PROPOSE_DUE_DATE',
        PROPOSE_CATEGORY = 'PROPOSE_CATEGORY',
        PROPOSE_SEVERITY = 'PROPOSE_SEVERITY',
    }


}

