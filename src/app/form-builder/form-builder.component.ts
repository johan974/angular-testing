import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  title = 'Another title for authentication';
  authType = 'register';
  isSubmitting = false;
  authForm: FormGroup;
  constructor( private fb: FormBuilder) {
    this.authForm = this.fb.group({
      'email': [' ', Validators.required ],
      'password': [' ', Validators.required ]
    });
  }

  submitForm() {
    let credentials = this.authForm.value;
    console.log(credentials);
  }
}
