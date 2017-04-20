import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  constructor(
    public _name: string,
    public _email: string,
    public _password: string
) {
}

ngOnInit(){
}

}
