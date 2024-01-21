import { IsString } from 'class-validator';

export class GetOkxInstrumentsSpotDto {
    @IsString()
    name: string;
}
