import { ApiProperty } from '@nestjs/swagger';

export class DataProvidersResponseDto {
    @ApiProperty({
        description: 'Name of the market data provider',
        example: 'LiveCoinWatch',
    })
    name: string;

    @ApiProperty({
        description: 'Website URL of the market data provider',
        example: 'https://livecoinwatch.com',
    })
    website: string;

    @ApiProperty({
        description: 'API URL of the market data provider',
        example: 'https://api.livecoinwatch.com',
    })
    apiUrl: string;

    @ApiProperty({
        description: 'Limits per second of the market data provider',
        example: 10,
    })
    limitsPerSecond: number;

    @ApiProperty({
        description: 'Limits per minute of the market data provider',
        example: 100,
    })
    limitsPerMinute: number;

    @ApiProperty({
        description: 'Limits per day of the market data provider',
        example: 10000,
    })
    limitsPerDay: number;

    @ApiProperty({
        description: 'Limits per month of the market data provider',
        example: 100000,
    })
    limitsPerMonth: number;
}
