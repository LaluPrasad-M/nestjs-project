import { Controller, Sse, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';

const CHANNEL = 'test';

/*
  Open {HOST}/sse.subscribe.html in browser
 */
@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}
  @Sse('subscribe')
  sseSubscribe(): Observable<unknown> {
    return this.sseService.sseSubscribe(CHANNEL);
  }

  @Post('emitEvent')
  async postSubscribe(@Body() body: Record<string, unknown>): Promise<void> {
    return this.sseService.postSubscribe(CHANNEL, body);
  }
}
