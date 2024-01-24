import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private/private.component';
import { CurrentUserService } from '../../services';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [CurrentUserService],
})
export class PrivateModule {}
