import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-player',
  imports: [ ReactiveFormsModule ],
  templateUrl: './update-player.component.html',
  styleUrl: './update-player.component.css'
})
export class UpdatePlayerComponent {
  updateForm: FormGroup;

  constructor (formBuilder: FormBuilder) {
    this.updateForm = formBuilder.group({
      email: ['', []],
      password: ['', []],
      password_confirm: ['', []],
      name: ['', []],
      last_name: ['', []],
      description: ['', []]
    })
  }

  public update () {
    
  }

}
