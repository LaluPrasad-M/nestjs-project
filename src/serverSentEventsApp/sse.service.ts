import { Injectable } from '@nestjs/common';
import { SseEventsService } from './sse-events.service';
import { merge, Observable } from 'rxjs';

const SUBSCRIPTION_REFRESH_INTERVAL = 10000;

@Injectable()
export class SseService {
  constructor(private readonly sseEventsService: SseEventsService) {}

  sseSubscribe(channel: string): Observable<unknown> {
    const sseEvents = this.sseEventsService.subscribe(channel);
    const keepAlive = this.sseEventsService.keepAlive(
      SUBSCRIPTION_REFRESH_INTERVAL,
    );
    return merge(sseEvents, keepAlive);
  }

  async postSubscribe(
    channel: string,
    data?: Record<string, unknown>,
  ): Promise<void> {
    return this.sseEventsService.emit(channel, data);
  }
}
