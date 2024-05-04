import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyUiComponent } from '@ng-workspace/my-ui';
import { myLib } from '@ng-workspace/my-lib';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-toolbox';
  myLib = myLib(43, 39);
}
