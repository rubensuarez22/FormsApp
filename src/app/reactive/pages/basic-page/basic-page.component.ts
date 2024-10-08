import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const rtx5090 ={
  name:' RTX - 5090',
  price: 2500,
  storage: 50
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{


  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    price:[0, [Validators.required, Validators.min(0)]],
    storage:[0, [Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder ){

  }
  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  isValidField(field: string):boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError(field:string): string |null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key){
        case 'required':
          return 'Este campo es requerido';

          case 'minlenght':
            return `Mínimo ${errors['minlenght'].requiredLenght} caracteres.`
      }
    }

    return null

  }


  onSave():void{

    if (this.myForm.invalid) return;

    this.myForm.reset({price:0, inStorage: 0})

  }


}
