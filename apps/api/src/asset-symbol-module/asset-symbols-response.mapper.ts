import { AssetSymbol } from '@prisma/client';
import { AssetSymbolsResponseDTO } from './dto/asset-symbols-response.dto';

export class AssetSymbolsResponseMapper {
    public static mapSymbolToResponseDto(
        symbol: AssetSymbol,
    ): AssetSymbolsResponseDTO {
        return this.mapSymbolsToResponseDto([symbol])[0];
    }

    public static mapSymbolsToResponseDto(
        symbols: AssetSymbol[],
    ): AssetSymbolsResponseDTO[] {
        return symbols.map((symbol: AssetSymbol): AssetSymbolsResponseDTO => {
            return {
                symbol: symbol.symbol,
                name: symbol.name,
            };
        });
    }
}
