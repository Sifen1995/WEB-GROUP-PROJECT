import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvmModule } from './evm/evm.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..','...','frontend'), // Path to your frontend folder
      serveRoot: '/', // Serve files at the root URL
      renderPath: '/home.html', // Ensure it uses home.html explicitly
    }),
    EvmModule, // Import your existing EVM module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




