import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getStatus() {
    const staus = {
      message: 'ok',
      time: new Date().toISOString(),
    };

    return staus;
  }
}
