import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealsDocument = Deals & Document;

@Schema()
export class Deals {
  @Prop()
  name: string;

  @Prop()
  id: number;
}

export const DealsSchema = SchemaFactory.createForClass(Deals);
