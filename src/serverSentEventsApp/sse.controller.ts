import { Controller, Sse, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';
import { ApiBody } from '@nestjs/swagger';

const CHANNEL = 'test';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  /*
  Open {HOST}/sse.subscribe.html in browser
 */
  @Sse('subscribe')
  sseSubscribe(): Observable<unknown> {
    return this.sseService.sseSubscribe(CHANNEL);
  }

  @ApiBody({ type: Object })
  @Post('emitEvent')
  async postSubscribe(@Body() body: Record<string, unknown>): Promise<void> {
    return this.sseService.postSubscribe(CHANNEL, body);
  }
}
