import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateProblemDto {
  @IsNumber()
  readonly longtitude: number;

  @IsNumber()
  readonly latitude: number;

  @IsString()
  readonly locationDesc: string;

  @IsString()
  readonly problemDesc: string;

  @IsString()
  @IsOptional()
  readonly proposedFix: string;
}
