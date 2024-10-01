import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['', Validators.required],
    wantNotifications: [false, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],

  })

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  constructor (private fb: FormBuilder) {}



  onSave(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      this.person = this.myForm.value;
      return;
    }
  }



  isValidField(field: string):boolean | null{
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched;
  }
}
