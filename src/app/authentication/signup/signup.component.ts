// signup.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  onSubmit() {
    // Add your signup logic here
    console.log('Signup form submitted!');
  }
}
