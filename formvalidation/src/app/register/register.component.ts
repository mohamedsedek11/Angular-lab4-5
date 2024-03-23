import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myform: FormGroup;

  constructor(){
    this.myform = new FormGroup({
      username: new FormControl('', [Validators.required ,Validators.minLength(10)]),
      userpass: new FormControl('', [Validators.required ,Validators.minLength(15)]),
      useremail: new FormControl('', [Validators.required ,Validators.minLength(20)]),
      area: new FormControl('', [Validators.required ,Validators.minLength(10), Validators.maxLength(50)]),

    });
  }

  handleval(){

  }

}
