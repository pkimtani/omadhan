import { ApiProperty } from '@nestjs/swagger';

export class AssetSymbolsResponseDTO {
    @ApiProperty()
    symbol: string;

    @ApiProperty()
    name: string;
}
