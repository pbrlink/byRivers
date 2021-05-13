import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { PingdController } from './pingd.controller';
import { PingdService } from './pingd.service';

@Module({
  imports: [ConfigModule],
  controllers: [PingdController],
  providers: [PingdService, ConfigService],
})
export class PingdModule {}
