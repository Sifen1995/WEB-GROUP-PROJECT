// src/admin/schemas/admin.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ required: true })
  adminId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: 'admin' })
  role: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
export type AdminDocument = Admin & Document;