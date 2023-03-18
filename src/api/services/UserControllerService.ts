/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequestDto } from '../models/CreateUserRequestDto';
import type { NameIdPair } from '../models/NameIdPair';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserResponseTenantDto } from '../models/UserResponseTenantDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updateUser(
        requestBody: UpdateUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/update/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns NameIdPair OK
     * @throws ApiError
     */
    public static addUser(
        requestBody: CreateUserRequestDto,
    ): CancelablePromise<NameIdPair> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/add/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserResponseTenantDto OK
     * @throws ApiError
     */
    public static getData(): CancelablePromise<Array<UserResponseTenantDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/data/users',
        });
    }

    /**
     * @param userId
     * @returns any OK
     * @throws ApiError
     */
    public static removeUser(
        userId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/data/remove/{userId}',
            path: {
                'userId': userId,
            },
        });
    }

    /**
     * @param email
     * @returns any OK
     * @throws ApiError
     */
    public static removeUser1(
        email: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/data/remove/email/{email}',
            path: {
                'email': email,
            },
        });
    }

}
