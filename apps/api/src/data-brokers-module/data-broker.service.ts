import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database-module/prisma.service';
import { MarketDataBroker, Prisma } from '@prisma/client';
import { AsyncResult } from '../async-result.type';
import { Err, Ok } from 'ts-results';

@Injectable()
export class DataBrokerService {
    constructor(private prisma: PrismaService) {}

    /**
     * Adds new data provider to the database.
     *
     * @async
     * @public
     * @param {Prisma.MarketDataBrokerCreateInput} dataProvider Data provider to add.
     * @returns {Promise<null>} Null if success, error otherwise.
     */
    async addDataProvider(
        dataProvider: Prisma.MarketDataBrokerCreateInput,
    ): AsyncResult<null> {
        try {
            this.prisma.marketDataBroker.create({ data: dataProvider });
        } catch (err) {
            console.log('Failed to add new data provider');
            console.log(err);
            return Err({
                message: 'Failed to add new data provider',
            });
        }

        return Ok(null);
    }

    /**
     * Returns list of all available data providers.
     *
     * @async
     * @public
     * @returns {Promise<MarketDataBroker[] | null>} List of all available data providers.
     */
    async getDataProviders(): AsyncResult<MarketDataBroker[]> {
        let dataProviders: MarketDataBroker[];
        try {
            dataProviders = await this.prisma.marketDataBroker.findMany();
        } catch (err) {
            console.log('Failed to get data providers');
            console.log(err);
            return Err({
                message: 'Failed to get data providers',
            });
        }

        return Ok(dataProviders);
    }
}
