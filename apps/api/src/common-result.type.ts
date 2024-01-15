import { HttpStatus } from '@nestjs/common';
import { Result } from 'ts-results';

export interface CommonError {
    /**
     * User friendly error message
     */
    message: string;
    /**
     * Suggested status code for the controller layer
     */
    statusCode?: HttpStatus;
    /**
     * Original error
     */
    error?: Error;
    /**
     * Translation key for front-end error
     */
    translationKey?: string;
}

export type CommonResult<T> = Result<T, CommonError>;
