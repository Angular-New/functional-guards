import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ICurrentUser } from '../types';
import { CurrentUser } from '../models';
import { EAccessToken } from '../enums';

@Injectable()
export class CurrentUserService {
  public currentUser$ = new BehaviorSubject<ICurrentUser | undefined | null>(
    undefined,
  );

  public setCurrentUser(): void {
    if (localStorage.getItem(EAccessToken.Token)) {
      const newUser: ICurrentUser = new CurrentUser('12', 'Ivan');
      this.currentUser$.next(newUser);
    } else {
      this.currentUser$.next(null);
    }
  }
}
