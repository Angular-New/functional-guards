import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CurrentUserService } from './services';
import { PrivateModule } from './components/private/private.module';

@Component({
  selector: 'fg-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, PrivateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly _currentUserService: CurrentUserService =
    inject(CurrentUserService);

  private readonly _timeOut: number = 2000;

  ngOnInit(): void {
    setTimeout((): void => {
      this._currentUserService.setCurrentUser();
    }, this._timeOut);
  }
}
