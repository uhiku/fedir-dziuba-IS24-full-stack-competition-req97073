import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class ProductIdParamDto {
  @ApiProperty()
  @IsUUID()
  public id: string;
}

export class ProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public productName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public scrumMasterName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public productOwnerName: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  public developers: string[];

  @ApiProperty()
  @IsDateString()
  public startDate: string;

  @ApiProperty({ enum: ['agile', 'scrum'] })
  @IsIn(['scrum', 'agile'])
  public methodology: 'scrum' | 'agile';
}
