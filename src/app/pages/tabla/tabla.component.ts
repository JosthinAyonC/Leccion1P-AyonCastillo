import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona.model';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  form!: FormGroup;
  listPersona: Persona[] = [{
    id: 1,
    firstname: 'Juan',
    lastname: 'Perez',
    ci: '1234567',
    birthday: new Date('1990-01-01')
  },
  {
    id: 5,
    firstname: 'Manuel',
    lastname: 'Vargas',
    ci: '1345627',
    birthday: new Date('1990-01-01')
  },
  {
    id: 2,
    firstname: 'Josue',
    lastname: 'Caballero',
    ci: '82371621',
    birthday: new Date('1990-01-01')
  },
  {
    id: 3,
    firstname: 'Josthin',
    lastname: 'Ayon',
    ci: '2019221',
    birthday: new Date('2001-05-10')
  },
  {
    id: 4,
    firstname: 'Julian',
    lastname: 'Alvarez',
    ci: '231245',
    birthday: new Date('1245-01-01')
  }
];

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(){
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      ci: [''],
      birthday: [''],
    });
  }

  agregarPersona() {
    if (this.form.valid) {
      const persona: Persona = {
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        ci: this.form.value.ci,
        birthday: new Date(this.form.value.birthday),
      };
      this.listPersona.push(persona);
      this.form.reset();
    } else {
      alert('Datos invalidos');
    }
  }

  eliminarEstudiante(indice: number): void {
    this.listPersona.splice(indice, 1);
  }
}
