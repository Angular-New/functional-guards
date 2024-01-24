import { ICurrentUser } from '../types';

export class CurrentUser implements ICurrentUser {
  constructor(
    public id: string,
    public name: string,
  ) {}
}
