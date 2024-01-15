import { Module } from '@nestjs/common';
import { PrismaService } from '../database-module/prisma.service';

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService],
})
export class AssetSymbolModule {}
