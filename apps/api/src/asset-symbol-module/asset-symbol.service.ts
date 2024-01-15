import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database-module/prisma.service';
import { AssetSymbol, UserAssetSymbol } from '@prisma/client';
import { AsyncResult } from '../async-result.type';
import { Err, Ok } from 'ts-results';

@Injectable()
export class AssetSymbolService {
    constructor(private prisma: PrismaService) {}

    /**
     * Returns list of all available symbols.
     *
     * @async
     * @public
     * @returns {Promise<AssetSymbol[] | null>} List of all available symbols.
     */
    public async getSymbols(): AsyncResult<AssetSymbol[]> {
        try {
            const assetSymbols: AssetSymbol[] =
                await this.prisma.assetSymbol.findMany();

            return Ok(assetSymbols);
        } catch (error) {
            console.log('Unable to fetch symbols.');
            console.log(error);
            return Err({
                message: 'Unable to fetch symbols.',
                error,
            });
        }
    }

    /**
     * Adds a new asset symbol to user portfolio.
     *
     * @param symbolId
     * @returns {Promise<AssetSymbol | null>} Newly added asset symbol.
     */
    public async addAssetSymbolToUserPortfolio(
        symbolId: string,
    ): AsyncResult<AssetSymbol> {
        try {
            // check if the request symbol exists in database
            const symbolExists: AssetSymbol =
                await this.prisma.assetSymbol.findUniqueOrThrow({
                    where: {
                        id: symbolId,
                    },
                });

            // TODO: test if error is thrown when symbol does not exist

            if (!symbolExists)
                return Err({
                    message: 'Symbol does not exist.',
                    error: null,
                });

            // check if the request symbol already exists in user portfolio
            const assetSymbolExists: UserAssetSymbol[] =
                await this.prisma.userAssetSymbol.findMany({
                    where: {
                        userId: '1',
                        symbolId,
                    },
                });

            // TODO: test if this works

            if (!assetSymbolExists || assetSymbolExists.length === 0) {
                await this.prisma.userAssetSymbol.create({
                    data: {
                        userId: '1',
                        symbolId,
                    },
                });
            }

            return Ok(symbolExists);
        } catch (error) {
            console.log('Unable to add asset symbol.');
            console.log(error);
            return Err({
                message: 'Unable to add asset symbol.',
                error,
            });
        }
    }
}
