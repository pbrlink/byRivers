import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { PingdModule } from './pingd/pingd.module';

@Module({
  imports: [ConfigModule, PingdModule],
})
export class AppModule {}
