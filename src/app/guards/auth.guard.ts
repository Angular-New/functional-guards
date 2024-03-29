import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

import { CurrentUserService } from '../services';
import { ICurrentUser } from '../types';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const _currentUserService: CurrentUserService = inject(CurrentUserService);
  const _router: Router = inject(Router);

  return _currentUserService.currentUser$.pipe(
    // @ts-ignore
    filter((currentUser): boolean => currentUser !== undefined),
    map((currentUser: ICurrentUser): boolean => {
      if (!currentUser) {
        _router.navigateByUrl('/');

        return false;
      }

      return true;
    }),
  );
};
