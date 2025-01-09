import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
    @Prop()
    name: string;

    @Prop()
    date: Date;

    @Prop()
    description: string;

    @Prop()
    category: string;

    @Prop()
    user: string;
    // Add other necessary fields
}

export const EventSchema = SchemaFactory.createForClass(Event);
export type EventDocument = Event & Document;