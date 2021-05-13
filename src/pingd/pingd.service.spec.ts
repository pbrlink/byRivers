import { Test, TestingModule } from '@nestjs/testing';
import { PingdService } from './pingd.service';

describe('PingdService', () => {
  let service: PingdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PingdService],
    }).compile();

    service = module.get<PingdService>(PingdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
