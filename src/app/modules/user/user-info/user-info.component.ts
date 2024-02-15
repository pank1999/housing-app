import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  userId!: number;
  user!: User;
  userService: UserService = inject(UserService);
  constructor(private route: ActivatedRoute, private router: Router) {}
  async ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.userId = +params['id'];
    });
    this.user = await this.userService.getUserById(this.userId);
  }

  deleteUser() {
    this.userService.deleteUserById(this.userId).then(() => {
      this.router.navigateByUrl('/user');
    });
  }
}
