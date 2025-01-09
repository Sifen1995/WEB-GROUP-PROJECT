import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



@Schema({ timestamps: true })
export class User extends Document {
    @Prop()
    title: string;
    // Add other necessary fields
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;