import { Controller, Logger, Post, Body } from '@nestjs/common';
import { KafkajsProducerService } from './kafkajs.producer.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('kafkajs')
export class KafkajsController {
  constructor(
    private readonly kafkajsProducerService: KafkajsProducerService,
  ) {}
  private readonly logger = new Logger(KafkajsController.name);

  /*
    api body
    {
      "message":"Hey There"
    }
   */
  @ApiBody({
    type: Object,
  })
  @Post()
  async kafkajsEmit(@Body() kafkaMessage: { message: string }) {
    this.logger.log(`Emitting message: ${JSON.stringify(kafkaMessage)}`);
    return await this.kafkajsProducerService.produceKafkaEvent(
      kafkaMessage.message,
    );
  }
}
