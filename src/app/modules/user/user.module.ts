import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
  exports: [UserComponent],
})
export class UserModule {}
