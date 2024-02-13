import { DataBrokerInterface } from '../data-broker.interface';
import { PrismaService } from '../../database-module/prisma.service';
import { MarketDataBroker } from '@prisma/client';
import { Err, Ok } from 'ts-results';
import { AsyncResult } from '../../async-result.type';
import { HttpService } from '@nestjs/axios';
import { OkxConstants } from '../okx.constants';
import { catchError, firstValueFrom } from 'rxjs';
import { GetOkxInstrumentsSpotDto } from '../dto/okx/get-okx-instruments-spot.dto';

export class OkxAdapter implements DataBrokerInterface {
    name = 'OKX';
    broker: MarketDataBroker;

    public constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService,
    ) {
        // TODO: Add error handling, if broker is zero or more than one broker(s) found.
        // TODO: Add error handling, if database is not initialised.
        void this.init();
    }

    async init(): Promise<void> {
        try {
            this.broker = await this.prisma.marketDataBroker.findFirstOrThrow({
                where: {
                    name: this.name,
                },
            });
        } catch (error) {
            console.log('Unable to initialise OKX adapter');
            console.error(error);
        }
    }

    getApiKey(): string {
        return this.broker.apiKey;
    }

    getApiUrl(): string {
        return this.broker.apiUrl;
    }

    async fetchSymbols(): AsyncResult<GetOkxInstrumentsSpotDto[]> {
        try {
            const fetchInstrumentsUrl = `${this.getApiUrl()}/${
                OkxConstants.ENDPOINT_PUBLIC_SPOT_INSTRUMENTS
            }`;
            const response = await firstValueFrom(
                this.httpService.get(fetchInstrumentsUrl).pipe(
                    catchError((err) =>
                        Err({
                            message: 'Unable to fetch symbols from OKX.',
                            error: err,
                        }),
                    ),
                ),
            );

            return Ok(response.data);
        } catch (error) {
            console.log('Unable to fetch symbols from OKX.');
            console.error(error);
            return Err({
                message: 'Unable to fetch symbols from OKX.',
                error,
            });
        }
    }
}
