import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Formulario', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Formulario', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder ) {}
  profileForm = this.formBuilder.group({
    nombres: [''],
    apellidos: [''],
    lugarDeNacimiento: [''],
    fechaDeNacimiento: [''],
    telefono: [''],
    edad: [''],
    universidad: [''],
    titulo: [''],
    ciudad: [''],
    fechaDeGrado: [''],
    telefonoUniversidad: [''],
    nombreEmpresa: [''],
    cargo: [''],
    tiempoLaborad: ['']
  });

  saveForm(){
    console.log('Form Data is ', this.profileForm.value)
  }
}
