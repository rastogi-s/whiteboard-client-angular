import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;
  urlRegister: string;
  urlLoggedUser: string;
  urlUpdateProfile: string;
  urlLogin: string;
  urlPassReset: string;
  urlVerifyUsername: string;
  urlLogout: string;
  urlDeleteProfile: string;

  constructor() {
    this.url = '/api/user';
    this.urlRegister = '/api/register';
    this.urlLoggedUser = '/api/logged';
    this.urlUpdateProfile = '/api/profile';
    this.urlLogin = '/api/login';
    this.urlPassReset = '/api/reset';
    this.urlVerifyUsername = '/api/verify';
    this.urlLogout = '/api/logout';
    this.urlDeleteProfile = '/api/delete';
  }

  createUser(user, callback) {

    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }

    }).then(response => response.json()).then(callback);
  }

  findUserById(userId, callback) {
    return fetch(this.url + '/' + userId).then(response => response.json()).then(callback);
  }


  updateUser(userId, user, callback) {
    return fetch(this.url + '/' + userId, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json()).then(callback);
  }

  deleteUser(userId, callback) {
    return fetch(this.url + '/' + userId, {
      method: 'DELETE',
    }).then(callback);
  }

  register(user, callback) {
    return fetch(this.urlRegister, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json()).then(callback);
  }

  login(username, password, callback) {
    return fetch(this.urlLogin, {
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    }).then(callback);
  }

  sendPasswordResetEmail(emailId, pageLink, callback) {
    return fetch(this.urlPassReset, {
      method: 'POST',
      body: emailId + ' ' + pageLink,
      // headers: {
      //     'content-type': 'application/json'
      // }
    }).then(callback);
  }

  verifyUser(username, callback) {
    return fetch(this.urlVerifyUsername + '/' + username).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    }).then(callback);
  }

  logout(callback) {
    return fetch(this.urlLogout, {
      method: 'POST',
      credentials: 'include',
    }).then(callback);
  }

  findLoggedUser(callback) {
    return fetch(this.urlLoggedUser, {
      credentials: 'same-origin'
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    }).then(callback);
  }


  updateUserProfile(user, callback) {
    return fetch(this.urlUpdateProfile, {
      method: 'PUT',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    }).then(callback);
  }


//  findAllUsers(callback) {
//   return $.ajax({
//     url: this.url,
//     success: callback
//   });
// }
}
