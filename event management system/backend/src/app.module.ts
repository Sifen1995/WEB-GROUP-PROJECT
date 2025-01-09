import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvmModule } from './evm/evm.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/event-managment?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000'),
 // Replace with your MongoDB connection string
    EvmModule,
  ],
})
export class AppModule {}
