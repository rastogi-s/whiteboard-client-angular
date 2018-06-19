import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  sessionCheck() {
    this.userService.findLoggedUser().then((user) => this.user = user);
  }

  logout() {

    this.userService.logout().then(() => this.router.navigate(['*']))
      .then(() =>
        this.userService.findLoggedUser().then((user) => this.user = user));

  }

}
