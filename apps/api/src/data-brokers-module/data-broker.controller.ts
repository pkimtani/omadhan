import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { DataBrokerService } from './data-broker.service';
import { DataProvidersResponseDto } from './dto/get-data-brokers.dto';
import { ApiErrorResponseDto } from '../api-error-response.dto';
import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { httpErrorHandler } from '../http-error.handler';
import { Response } from 'express';
import { CreateDataBrokerDto } from './dto/create-data-broker.dto';

@Controller('data-provider')
export class DataBrokerController {
    constructor(private dataProviderService: DataBrokerService) {}

    @Post()
    @ApiOperation({
        summary: 'POST /data-provider',
        description: 'Add new market data provider',
    })
    @ApiOkResponse({ type: null })
    @ApiInternalServerErrorResponse({ type: ApiErrorResponseDto })
    async addDataProvider(
        @Body() dataProvider: CreateDataBrokerDto,
        @Res({ passthrough: true }) res: Response,
    ): Promise<null | ApiErrorResponseDto> {
        const result = await this.dataProviderService.addDataProvider(
            dataProvider,
        );

        if (result.err) return httpErrorHandler(res, result.val);

        return null;
    }

    @Get()
    @ApiOperation({
        summary: 'GET /data-provider',
        description: 'GET all market data providers',
    })
    @ApiOkResponse({ type: DataProvidersResponseDto })
    @ApiInternalServerErrorResponse({ type: ApiErrorResponseDto })
    async getDataProviders(
        @Res({ passthrough: true }) res: Response,
    ): Promise<DataProvidersResponseDto[] | ApiErrorResponseDto> {
        const result = await this.dataProviderService.getDataProviders();

        if (result.err) return httpErrorHandler(res, result.val);

        if (result.ok) {
            return result.val;
        }
    }
}
