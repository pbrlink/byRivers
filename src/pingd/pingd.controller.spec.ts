import { Test, TestingModule } from '@nestjs/testing';
import { PingdController } from './pingd.controller';

describe('PingdController', () => {
  let controller: PingdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingdController],
    }).compile();

    controller = module.get<PingdController>(PingdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
