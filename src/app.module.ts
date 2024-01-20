import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullMQModule } from './bullMQ/bull.module';
import { getBullModule } from './bullMQ/Configs/get-bull-module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env'],
      // validationSchema: configSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    getBullModule(),
    BullMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
