import { Injectable, Logger } from '@nestjs/common';
import { fromEvent, interval, map, Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable()
export class SseEventsService {
  private readonly logger = new Logger(SseEventsService.name);
  private readonly emitter = new EventEmitter();

  subscribe(channel: string): Observable<unknown> {
    return fromEvent(this.emitter, channel);
  }

  keepAlive(SUBSCRIPTION_REFRESH_INTERVAL: number): Observable<unknown> {
    return interval(SUBSCRIPTION_REFRESH_INTERVAL).pipe(
      map((num: number) => ({
        data: {
          type: 'keepAlive',
          connectionTime:
            ((num + 1) * SUBSCRIPTION_REFRESH_INTERVAL) / 1000 + ' seconds',
        },
      })),
    );
  }

  emit(channel: string, data?: Record<string, unknown>): void {
    this.logger.log(`Attempting emit for channel: ${channel}`);

    this.emitter.on('error', (err) => {
      this.logger.error(`Emit error for ${channel}: ${err}`);
    });

    this.emitter.on(channel, ({ data }) => {
      this.logger.log(
        `Emit Success for ${channel}: ${JSON.stringify({
          data,
        })}`,
      );
    });

    this.emitter.emit(channel, { data });
  }
}
