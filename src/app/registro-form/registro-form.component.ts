import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors  } from '@angular/forms';

// VALIDACIONES
function validateTelefono(control: AbstractControl): ValidationErrors | null {
  const telefonoValue = control.value;
  if (!telefonoValue) {
    return null;
  }

  const isValid = Validators.pattern(/^[0-9]*$/)(control);
  return isValid ? null : { invalidTelefono: true };
}

function allFieldsNotEmpty(control: AbstractControl): ValidationErrors | null {
  const values = Object.values(control.value);

  const isAnyEmpty = values.some((value) => value === '');

  if (isAnyEmpty) {
    return { allFieldsNotEmptyError: true };
  }

  return null;
}


function telefonoCatValidator(control: AbstractControl): ValidationErrors | null {
  const telefono = control.get('telefono')?.value;
  const cat = control.get('cat')?.value;

  if (!telefono) {
    return { telefonoCatError: true };
  }

  return null;
}

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      nomempresa: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [ Validators.pattern('^[0-9]*$')]],
      cat: ['facturacion', Validators.required],
      mensaje: [''],
    },
    {
      validators: [telefonoCatValidator, allFieldsNotEmpty],

    }
    );
  }

  onSubmit() {
    if (this.registroForm.valid) {
      // OBTENER DATOS DEL FORM
      const formData = this.registroForm.value;

      // POST A LA API
      this.http.post('http://localhost:3000/registro', formData).subscribe(
      (response) => {
        console.log('Envio de contacto exitoso.', response);

	this.registroForm.reset();
      },
      (error) => {
        console.error('Error al momento de enviar contacto:', error);
      }
    );

    }
  }
}

