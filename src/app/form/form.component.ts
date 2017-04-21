///<reference path="../user/user.component.ts"/>
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {

  private users: UserComponent[] =[];

  user = {
    name: '',
    email: '',
    password: ''
  };
  submited = false;

  onSubmit(form: NgForm) {

    let newUser: UserComponent = new UserComponent(this.user.name, this.user.email, this.user.password);
    this.users.push(newUser);
    this.submited = true;
    console.log(this.users.map(obj => JSON.stringify(obj)));

  }

  constructor() {
  }

  ngOnInit() {
  }

}
