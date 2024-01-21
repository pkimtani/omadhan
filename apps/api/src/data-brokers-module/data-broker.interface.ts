import { MarketDataBroker } from '@prisma/client';
import { AsyncResult } from '../async-result.type';

export interface DataBrokerInterface {
    name: string;

    broker: MarketDataBroker;

    init(): Promise<void>;

    getApiKey(): string;

    getApiUrl(): string;

    fetchSymbols(): AsyncResult<unknown[]>;
}
