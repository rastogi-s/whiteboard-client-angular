import {Component, OnInit} from '@angular/core';
import {User} from './../../models/user.model.client';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  user: User = new User();

  update(user: User) {
    this.userService.updateUserProfile(user).
    then((status) => console.log(status));
  }

  logout() {
    this.userService.logout().then(() =>
      this.router.navigate(['login']));
  }

  ngOnInit() {
    this.userService.findLoggedUser().then(
      user => this.user = user);
  }

}
