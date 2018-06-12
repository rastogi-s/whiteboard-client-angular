import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;

  login(username, password) {
    console.log([username, password]);
    this.router.navigate(['profile']);
  }

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
  }


}
