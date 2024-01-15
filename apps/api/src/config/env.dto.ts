import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Environment } from './env.enum';

export class EnvironmentVariables {
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsNumber()
    APP_PORT: number;

    @IsString()
    DATABASE_URL: string;
}
