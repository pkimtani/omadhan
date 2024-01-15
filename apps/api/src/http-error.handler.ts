import { HttpStatus } from '@nestjs/common';
import { ApiErrorResponseDto } from './api-error-response.dto';
import { CommonError } from './common-result.type';
import { Response } from 'express';

export const httpErrorHandler = (
    res: Response,
    errorResult: CommonError,
): ApiErrorResponseDto => {
    const statusCode =
        errorResult.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR;
    res.status(statusCode);
    return { ...errorResult, statusCode };
};
