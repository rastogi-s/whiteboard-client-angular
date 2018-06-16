import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  verifyPassword: string;
  usernameExists: boolean;

  constructor(private router: Router,
              private service: UserService) {
    this.usernameExists = false;
  }


  register(username, password, verifyPassword) {
    console.log([username, password, verifyPassword]);
    this.service
      .register({username, password})
      .then((res) => {
          console.log(res.status);
          if (res.status === true) {
            this.router.navigate(['profile']);
          } else {
            console.log('ssiii');
            this.usernameExists = true;
          }
        }
      );
  }

  ngOnInit() {
  }

}
