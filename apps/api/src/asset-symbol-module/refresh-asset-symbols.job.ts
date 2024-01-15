import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../database-module/prisma.service';

@Injectable()
export class RefreshAssetSymbolsJob {
    constructor(private readonly prisma: PrismaService) {}

    /**
     * Algo:
     * 1. Fetch all the brokers from the database
     * 2. For each broker, fetch all the symbols from their respective APIs
     * 3. For each symbol, check if it exists in the database
     * 4. If it does not exist
     *   4.1. Add it to the database -> asset_symbol table
     *   4.2. Add it to the database -> broker_asset_symbol table with the broker specific symbol id
     * 5. If it exists, skip it
     *
     */
    @Cron(CronExpression.EVERY_DAY_AT_1AM, {
        name: 'refreshSymbols',
    })
    handleCron() {
        try {
            const brokers = this.prisma.marketDataBroker.findMany();

            console.log(brokers);
        } catch (error) {
            console.log('Unable to fetch symbols.');
            console.log(error);
        }
    }
}
