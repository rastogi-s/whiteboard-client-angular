export class User {

  id: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  phone: string;
  role: string;

  constructor(user: object) {
    this.username = user.username;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.password = user.password;
    this.phone = user.phone;
    this.role = user.role;
    this.dateOfBirth = user.dateOfBirth;
  }


}
