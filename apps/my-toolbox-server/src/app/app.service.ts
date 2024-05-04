import { Injectable } from '@nestjs/common';
import { myLib } from '@ng-workspace/my-lib';

@Injectable()
export class AppService {
  getData(operand1: number, operand2: number): { message: string } {
    return { message: myLib(operand1, operand2) };
  }
}
