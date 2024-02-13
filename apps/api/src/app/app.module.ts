import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from '../config/env.validation';
import { ScheduleModule } from '@nestjs/schedule';
import { RefreshAssetSymbolsJob } from '../asset-symbol-module/refresh-asset-symbols.job';
import { PrismaService } from '../database-module/prisma.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validate,
        }),
        ScheduleModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [
        ConfigService,
        AppService,
        PrismaService,
        RefreshAssetSymbolsJob,
    ],
})
export class AppModule {}
