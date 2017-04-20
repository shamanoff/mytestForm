import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: ''
  };
  submited = false;

  onSubmit(form: NgForm) {
    this.submited = true;
    console.log(this.user);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
