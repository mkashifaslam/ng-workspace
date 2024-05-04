import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alertMessage } from '@ng-workspace/my-lib';

@Component({
  selector: 'lib-my-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-ui.component.html',
  styleUrl: './my-ui.component.css',
})
export class MyUiComponent {
  protected readonly message = alertMessage('Hello, world');
}
