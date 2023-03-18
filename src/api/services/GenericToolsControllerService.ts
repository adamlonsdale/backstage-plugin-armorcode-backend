/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigRequest } from '../models/ConfigRequest';
import type { CoreConfigurationJpaDto } from '../models/CoreConfigurationJpaDto';
import type { DescribeToolConfigurationResponse } from '../models/DescribeToolConfigurationResponse';
import type { JsonNode } from '../models/JsonNode';
import type { ListToolCommentsResponse } from '../models/ListToolCommentsResponse';
import type { ListToolConfigRequest } from '../models/ListToolConfigRequest';
import type { ListToolFindingCommentRequest } from '../models/ListToolFindingCommentRequest';
import type { ListToolProjectRequest } from '../models/ListToolProjectRequest';
import type { ListToolProjectResponse } from '../models/ListToolProjectResponse';
import type { NameIdPair } from '../models/NameIdPair';
import type { Pageable } from '../models/Pageable';
import type { PageImplCoreConfigurationJpaDto } from '../models/PageImplCoreConfigurationJpaDto';
import type { PageToolConfigHistoryResponse } from '../models/PageToolConfigHistoryResponse';
import type { RegisterWebHookRequest } from '../models/RegisterWebHookRequest';
import type { RegisterWebHookResponse } from '../models/RegisterWebHookResponse';
import type { S3UploadUrlResponse } from '../models/S3UploadUrlResponse';
import type { ScanUploadRequest } from '../models/ScanUploadRequest';
import type { StringNameIdPair } from '../models/StringNameIdPair';
import type { ToolFindingAttachmentRequest } from '../models/ToolFindingAttachmentRequest';
import type { ToolMetaResponseDto } from '../models/ToolMetaResponseDto';
import type { UnmappedProjectRequestDto } from '../models/UnmappedProjectRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenericToolsControllerService {

    /**
     * @param toolName
     * @param id
     * @param requestBody
     * @returns JsonNode OK
     * @throws ApiError
     */
    public static updateLoginDetails(
        toolName: string,
        id: number,
        requestBody: JsonNode,
    ): CancelablePromise<JsonNode> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/tools/generic/login_details/{tool_name}/{id}',
            path: {
                'tool_name': toolName,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static deleteLoginDetails(
        toolName: string,
        id: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/tools/generic/login_details/{tool_name}/{id}',
            path: {
                'tool_name': toolName,
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static updateToolConfigurations(
        requestBody: JsonNode,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/tools/generic/configurations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static createToolConfigurations(
        requestBody: Array<JsonNode>,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/configurations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static deleteConfiguration(
        toolName: string,
        id: Array<number>,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/tools/generic/configurations',
            query: {
                'tool_name': toolName,
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static updateToolWebhookConfigurations(
        requestBody: JsonNode,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/tools/generic/configurations/webhook',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns RegisterWebHookResponse OK
     * @throws ApiError
     */
    public static createToolWebhookConfigurations(
        requestBody: JsonNode,
    ): CancelablePromise<RegisterWebHookResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/configurations/webhook',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @returns CoreConfigurationJpaDto OK
     * @throws ApiError
     */
    public static getUnmappedProjects(
        toolName: string,
    ): CancelablePromise<Array<CoreConfigurationJpaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/{tool_name}/unmapped-projects',
            path: {
                'tool_name': toolName,
            },
        });
    }

    /**
     * @param toolName
     * @returns string OK
     * @throws ApiError
     */
    public static syncUnmappedProjects(
        toolName: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/{tool_name}/unmapped-projects',
            path: {
                'tool_name': toolName,
            },
        });
    }

    /**
     * @param configId
     * @param toolName
     * @returns any OK
     * @throws ApiError
     */
    public static startToolScan(
        configId: number,
        toolName: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/start-tool-scan',
            query: {
                'configId': configId,
                'toolName': toolName,
            },
        });
    }

    /**
     * @param toolName
     * @returns JsonNode OK
     * @throws ApiError
     */
    public static getLoginDetails(
        toolName: string,
    ): CancelablePromise<JsonNode> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/login_details/{tool_name}',
            path: {
                'tool_name': toolName,
            },
        });
    }

    /**
     * @param toolName
     * @param requestBody
     * @returns JsonNode OK
     * @throws ApiError
     */
    public static createLoginDetails(
        toolName: string,
        requestBody: JsonNode,
    ): CancelablePromise<JsonNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/login_details/{tool_name}',
            path: {
                'tool_name': toolName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static startImport(
        toolName: string,
        requestBody: ConfigRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/import/',
            query: {
                'toolName': toolName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param requestBody
     * @returns JsonNode OK
     * @throws ApiError
     */
    public static getToolConfigurations(
        toolName: string,
        requestBody: ListToolConfigRequest,
    ): CancelablePromise<JsonNode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/configurations/{tool_name}',
            path: {
                'tool_name': toolName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns RegisterWebHookResponse OK
     * @throws ApiError
     */
    public static registerWebHook(
        requestBody: RegisterWebHookRequest,
    ): CancelablePromise<RegisterWebHookResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/configurations/{tool_name}/webhook',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param requestBody
     * @returns S3UploadUrlResponse OK
     * @throws ApiError
     */
    public static uploadScanReport(
        toolName: string,
        requestBody: ScanUploadRequest,
    ): CancelablePromise<S3UploadUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/tools/generic/configurations/{tool_name}/upload',
            path: {
                'tool_name': toolName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param toolName
     * @param request
     * @returns ListToolCommentsResponse OK
     * @throws ApiError
     */
    public static getToolFindingComments(
        toolName: string,
        request: ListToolFindingCommentRequest,
    ): CancelablePromise<ListToolCommentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/{tool_name}/comments',
            path: {
                'tool_name': toolName,
            },
            query: {
                'request': request,
            },
        });
    }

    /**
     * @param toolName
     * @param request
     * @returns StringNameIdPair OK
     * @throws ApiError
     */
    public static getToolFindingAttachment(
        toolName: string,
        request: ToolFindingAttachmentRequest,
    ): CancelablePromise<Array<StringNameIdPair>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/{tool_name}/attachments',
            path: {
                'tool_name': toolName,
            },
            query: {
                'request': request,
            },
        });
    }

    /**
     * @param toolName
     * @param request
     * @returns string OK
     * @throws ApiError
     */
    public static downloadAttachment(
        toolName: string,
        request: ToolFindingAttachmentRequest,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/{tool_name}/attachment',
            path: {
                'tool_name': toolName,
            },
            query: {
                'request': request,
            },
        });
    }

    /**
     * @returns CoreConfigurationJpaDto OK
     * @throws ApiError
     */
    public static getUnmappedProjects1(): CancelablePromise<Array<CoreConfigurationJpaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/unmapped-projects',
        });
    }

    /**
     * @returns NameIdPair OK
     * @throws ApiError
     */
    public static fetchUnmappedToolStatsByToolName(): CancelablePromise<Array<NameIdPair>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/unmapped-projects-stats',
        });
    }

    /**
     * @param unmappedProjectRequest
     * @param page
     * @returns PageImplCoreConfigurationJpaDto OK
     * @throws ApiError
     */
    public static getUnmappedProjects2(
        unmappedProjectRequest: UnmappedProjectRequestDto,
        page: Pageable,
    ): CancelablePromise<PageImplCoreConfigurationJpaDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/unmapped-projects-page',
            query: {
                'unmappedProjectRequest': unmappedProjectRequest,
                'page': page,
            },
        });
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static getSnykExploitMaturity(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/snyk-exploit-maturity',
        });
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static getProjectsFilter(): CancelablePromise<Record<string, Array<string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/projects-filters',
        });
    }

    /**
     * @returns ToolMetaResponseDto OK
     * @throws ApiError
     */
    public static getToolsMeta(): CancelablePromise<Array<ToolMetaResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/meta',
        });
    }

    /**
     * @param tenant
     * @param buId
     * @param sameBu
     * @returns string OK
     * @throws ApiError
     */
    public static syncUnmappedProjects1(
        tenant: number,
        buId: number,
        sameBu: boolean,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/mapSnykImages',
            query: {
                'tenant': tenant,
                'buId': buId,
                'sameBu': sameBu,
            },
        });
    }

    /**
     * @param toolName
     * @param id
     * @returns DescribeToolConfigurationResponse OK
     * @throws ApiError
     */
    public static describeToolConfigurationResponse(
        toolName: string,
        id: number,
    ): CancelablePromise<DescribeToolConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/{id}',
            path: {
                'tool_name': toolName,
                'id': id,
            },
        });
    }

    /**
     * @param toolName
     * @returns string OK
     * @throws ApiError
     */
    public static getToolVersion(
        toolName: string,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/version',
            path: {
                'tool_name': toolName,
            },
        });
    }

    /**
     * @param toolName
     * @param request
     * @param token
     * @returns ListToolProjectResponse OK
     * @throws ApiError
     */
    public static getProjectToolConfigurationsWithToken(
        toolName: string,
        request: ListToolProjectRequest,
        token: string,
    ): CancelablePromise<ListToolProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/projectsWithToken',
            path: {
                'tool_name': toolName,
            },
            query: {
                'request': request,
                'token': token,
            },
        });
    }

    /**
     * @param toolName
     * @param request
     * @returns ListToolProjectResponse OK
     * @throws ApiError
     */
    public static getProjectToolConfigurations(
        toolName: string,
        request: ListToolProjectRequest,
    ): CancelablePromise<ListToolProjectResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/project',
            path: {
                'tool_name': toolName,
            },
            query: {
                'request': request,
            },
        });
    }

    /**
     * @param toolName
     * @param page
     * @returns PageToolConfigHistoryResponse OK
     * @throws ApiError
     */
    public static getToolAuditHistory(
        toolName: string,
        page: Pageable,
    ): CancelablePromise<PageToolConfigHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/auditlog',
            path: {
                'tool_name': toolName,
            },
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param toolName
     * @param toolType
     * @param request
     * @param page
     * @param loginId
     * @returns JsonNode OK
     * @throws ApiError
     */
    public static getToolConfigurations1(
        toolName: string,
        toolType: 'PULL' | 'PUSH' | 'SCAN_UPLOAD' | 'WEBHOOK',
        request: ListToolConfigRequest,
        page: Pageable,
        loginId?: number,
    ): CancelablePromise<JsonNode> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/{tool_name}/',
            path: {
                'tool_name': toolName,
            },
            query: {
                'toolType': toolType,
                'login_id': loginId,
                'request': request,
                'page': page,
            },
        });
    }

    /**
     * @param toolName
     * @param toolType
     * @param loginId
     * @returns any OK
     * @throws ApiError
     */
    public static getToolConfigurationFilters(
        toolName: string,
        toolType: 'PULL' | 'PUSH' | 'SCAN_UPLOAD' | 'WEBHOOK',
        loginId?: number,
    ): CancelablePromise<Record<string, Array<any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/tools/generic/configurations/filters/{tool_name}',
            path: {
                'tool_name': toolName,
            },
            query: {
                'toolType': toolType,
                'loginId': loginId,
            },
        });
    }

    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static deleteToolWebhookConfigurations(
        id: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/tools/generic/configurations/webhook/{id}',
            path: {
                'id': id,
            },
        });
    }

}
