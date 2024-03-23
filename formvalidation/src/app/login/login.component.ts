import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {




  name : string = 'Sedek';

  handleval(myForm : any){
    console.log(myForm)
    console.log(myForm.value)
    alert("HOLLA' your login Successrd")
  }
  }

