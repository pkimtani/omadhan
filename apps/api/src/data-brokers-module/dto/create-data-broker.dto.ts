import { IsNumber, IsString } from 'class-validator';

export class CreateDataBrokerDto {
    @IsString()
    name: string;

    @IsString()
    website: string;

    @IsString()
    apiUrl: string;

    @IsString()
    apiKey: string;

    @IsNumber()
    limitsPerSecond: number;

    @IsNumber()
    limitsPerMinute: number;

    @IsNumber()
    limitsPerDay: number;

    @IsNumber()
    limitsPerMonth: number;

    @IsNumber()
    limitsPerYear: number;
}
