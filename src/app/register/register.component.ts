import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  integerRegex= /^\d+$/;
  emailRegex= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  LogipoolForm = new FormGroup
  ({
      username: new FormControl("",[Validators.required, Validators.maxLength(32)]),

      email: new FormControl("",[Validators.required, Validators.maxLength(32)]),

      mobile: new FormControl("",Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)])),

      education: new FormControl("",[Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)])
    })

    getControl(name:any) : AbstractControl|null
    {
      return this.LogipoolForm.get(name);
    }


    registerFn()
    {
      console.log(this.LogipoolForm.value);
    }
}
