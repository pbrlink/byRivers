import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class PingdService {
  public useData(raw?: string) {
    if (!raw) return [false, 'Null Empty'];
    const data = CryptoJS.AES.decrypt(raw, 'key').toString(CryptoJS.enc.Utf8);
    if (!data) return [false, ''];
    return [true, data];
  }
}
