import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvmService } from './evm.service';
import { EvmController } from './evm.controller';
import { User, UserSchema } from './schemas/User.schema';
import { Event, EventSchema } from './schemas/Events.schema';
import { Category, CategorySchema } from './schemas/category.schema';
import { Reservation, ReservationSchema } from './schemas/reservation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Event.name, schema: EventSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [EvmController],
  providers: [EvmService],
})
export class EvmModule {}
