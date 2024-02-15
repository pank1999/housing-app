import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCardComponent } from 'src/app/modules/user/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent, UserCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UserComponent],
})
export class UserModule {}
