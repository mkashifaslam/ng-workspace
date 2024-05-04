import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return correct sum of two numbers', () => {
      expect(service.getData(15, 65)).toEqual({
        message: 'Sum of 15 and 65 is 80',
      });
    });
  });
});
