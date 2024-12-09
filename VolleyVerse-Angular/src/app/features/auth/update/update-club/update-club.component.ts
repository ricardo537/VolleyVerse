import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-club',
  imports: [ ReactiveFormsModule ],
  templateUrl: './update-club.component.html',
  styleUrl: './update-club.component.css'
})
export class UpdateClubComponent {
  updateForm: FormGroup;

  constructor (formBuilder: FormBuilder) {
    this.updateForm = formBuilder.group({
      email: ['', []],
      password: ['', []],
      password_confirm: ['', []],
      name: ['', []],
      zip_code: ['', []],
      contact: ['', []]
    })
  }

  public update () {
    
  }
}
