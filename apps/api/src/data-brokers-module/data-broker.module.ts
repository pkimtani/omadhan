import { Module } from '@nestjs/common';
import { DataBrokerController } from './data-broker.controller';
import { DataBrokerService } from './data-broker.service';
import { PrismaService } from '../database-module/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [DataBrokerController],
    providers: [PrismaService, DataBrokerService],
})
export class DataBrokerModule {}
