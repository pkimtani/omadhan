import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfigInterface } from './database-config.interface';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}

    get databaseConfig(): DatabaseConfigInterface {
        return { url: this.configService.get<string>('DATABASE_URL') };
    }
}
