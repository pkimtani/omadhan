import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database-module/prisma.service';
import { Command, CommandRunner } from 'nest-commander';
import { DataBrokerInterface } from '../data-brokers-module/data-broker.interface';

@Injectable()
@Command({
    name: 'refresh-asset-symbols',
    description: 'Refresh asset symbols',
})
export class RefreshAssetSymbolsJob extends CommandRunner {
    constructor(
        private readonly prisma: PrismaService,
        private readonly brokerAdapter: DataBrokerInterface,
    ) {
        super();
    }

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
    async run(): Promise<void> {
        try {
            console.log('Running: refresh-asset-symbols job');
            const brokers = await this.prisma.marketDataBroker.findMany();

            for (const broker of brokers) {
                console.log(`Fetching symbols for ${broker.name}`);
                this.brokerAdapter.broker = broker;
                const symbols = await this.brokerAdapter.fetchSymbols();
                if (symbols.err) {
                    console.log(`Unable to fetch symbols for ${broker.name}`);
                    console.log(symbols.val);
                    continue;
                }

                if (symbols.ok) {
                    console.log(symbols.val);
                    console.log(
                        `Fetched ${symbols.val.length} symbols for ${broker.name}`,
                    );
                }
            }

            console.log('Finished: refresh-asset-symbols job');
        } catch (error) {
            console.log('Unable to fetch symbols.');
            console.log(error);
        }
    }
}
