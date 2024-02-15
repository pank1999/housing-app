import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users!: User[];
  userService: UserService = inject(UserService);
  async ngOnInit() {
    this.users = await this.userService.getAllUser();
    console.log(this.users);
  }
}
