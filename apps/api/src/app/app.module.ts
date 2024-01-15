import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from '../config/env.validation';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validate,
        }),
        ScheduleModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [ConfigService, AppService],
})
export class AppModule {}
