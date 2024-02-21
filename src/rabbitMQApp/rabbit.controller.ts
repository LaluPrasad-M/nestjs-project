import { Controller, Get } from '@nestjs/common';
import { RabbitEmitterService } from './rabbit.emitter.service';

@Controller('rabbitmq')
export class RabbitController {
  constructor(private readonly rabbitEmitterService: RabbitEmitterService) {}

  @Get('send')
  async sendMessage() {
    return await this.rabbitEmitterService.emitMessage('Hey there!');
  }
}
