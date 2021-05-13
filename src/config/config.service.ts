import { Injectable } from '@nestjs/common';
import { IConfig } from './config.interface';

@Injectable()
export class ConfigService {
  public getConfig(): IConfig {
    return {};
  }
}
