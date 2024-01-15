import { IsString } from 'class-validator';

export class AddAssetSymbolRequestDTO {
    @IsString()
    symbolId: string;
}
