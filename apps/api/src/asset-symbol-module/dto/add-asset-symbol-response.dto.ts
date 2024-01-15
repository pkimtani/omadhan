import { ApiProperty } from '@nestjs/swagger';

export class AddAssetSymbolResponseDTO {
    @ApiProperty()
    symbol: string;

    @ApiProperty()
    name: string;
}
