import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AssetSymbolsResponseDTO } from './dto/asset-symbols-response.dto';
import { AssetSymbolService } from './asset-symbol.service';
import { httpErrorHandler } from '../http-error.handler';
import { Response } from 'express';
import { AssetSymbolsResponseMapper } from './asset-symbols-response.mapper';
import { ApiErrorResponseDto } from '../api-error-response.dto';
import {
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { AddAssetSymbolResponseDTO } from './dto/add-asset-symbol-response.dto';
import { AddAssetSymbolRequestDTO } from './dto/add-asset-symbol-request.dto';

@Controller('symbol')
export class AssetSymbolController {
    constructor(private readonly symbolService: AssetSymbolService) {}

    @Get()
    @ApiOperation({
        summary: 'GET /asset-symbols',
        description: 'GET all available asset symbols.',
    })
    @ApiOkResponse({
        type: AssetSymbolsResponseDTO,
        isArray: true,
        description: 'Returns all available asset symbols.',
    })
    @ApiInternalServerErrorResponse({ type: ApiErrorResponseDto })
    public async getAssetSymbols(
        @Res({ passthrough: true }) res: Response,
    ): Promise<AssetSymbolsResponseDTO[] | ApiErrorResponseDto> {
        const assetSymbolsResult = await this.symbolService.getSymbols();

        if (assetSymbolsResult.err) {
            httpErrorHandler(res, assetSymbolsResult.val);
        }

        if (assetSymbolsResult.ok) {
            return AssetSymbolsResponseMapper.mapSymbolsToResponseDto(
                assetSymbolsResult.val,
            );
        }
    }

    @Post()
    @ApiOperation({
        summary: 'POST /user/asset-symbol',
        description: 'POST add new asset symbol to user portfolio.',
    })
    @ApiOkResponse({
        type: AddAssetSymbolResponseDTO,
        isArray: false,
        description: 'Returns the newly added asset symbol.',
    })
    @ApiInternalServerErrorResponse({ type: ApiErrorResponseDto })
    public async addAssetSymbolToUserPortfolio(
        @Body() addAssetSymbolRequestDTO: AddAssetSymbolRequestDTO,
        @Res({ passthrough: true }) res: Response,
    ): Promise<AssetSymbolsResponseDTO | ApiErrorResponseDto> {
        const { symbolId } = addAssetSymbolRequestDTO;
        const assetSymbolsResult =
            await this.symbolService.addAssetSymbolToUserPortfolio(symbolId);

        if (assetSymbolsResult.err) {
            httpErrorHandler(res, assetSymbolsResult.val);
        }

        if (assetSymbolsResult.ok) {
            return AssetSymbolsResponseMapper.mapSymbolToResponseDto(
                assetSymbolsResult.val,
            );
        }
    }
}
