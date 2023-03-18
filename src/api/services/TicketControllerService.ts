/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JiraConfigurationDto } from '../models/JiraConfigurationDto';
import type { JiraProjectKeyUpdateRequestDto } from '../models/JiraProjectKeyUpdateRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TicketControllerService {

    /**
     * @param requestBody
     * @returns JiraConfigurationDto OK
     * @throws ApiError
     */
    public static updateProjectKey(
        requestBody: JiraProjectKeyUpdateRequestDto,
    ): CancelablePromise<JiraConfigurationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tickets/jira/configuration/projectkey',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
