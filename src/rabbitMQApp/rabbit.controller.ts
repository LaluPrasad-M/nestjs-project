import { Controller, Get } from '@nestjs/common';
import { RabbitEmitterService } from './rabbit.emitter.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('rabbitmq')
export class RabbitController {
  constructor(private readonly rabbitEmitterService: RabbitEmitterService) {}

  @Get('send')
  @ApiOkResponse({
    description: 'Emit a RMQ message.',
  })
  async sendMessage() {
    return await this.rabbitEmitterService.emitMessage('Hey there!');
  }
}
