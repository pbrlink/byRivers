import { Controller, Get, Header, Query } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { PingdService } from './pingd.service';

@Controller('pingd')
export class PingdController {
  constructor(
    private pingdSvr: PingdService,
    private configSvr: ConfigService,
  ) {}

  @Get()
  @Header('Cache-Control', 'none')
  public getData(@Query('d') data: string) {
    const [bool, msg] = this.pingdSvr.useData(data);
    if (!bool) return;

    return;
  }
}
