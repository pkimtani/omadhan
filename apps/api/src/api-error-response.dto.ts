import { HttpStatus } from '@nestjs/common';
import { getHttpStatusCodes } from './utils/http-status.util';
import { ApiProperty } from '@nestjs/swagger';

export class ApiErrorResponseDto {
    @ApiProperty({
        example: 'Something went wrong',
    })
    message: string;

    @ApiProperty({ enum: getHttpStatusCodes(), example: 400 })
    statusCode: HttpStatus;
}
