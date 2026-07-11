import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateResponseDto {
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  vacancyId: number;

  @IsString()
  @IsOptional()
  @MaxLength(4000)
  coverLetter?: string;
}
