import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  titulo:string = 'Reporte de perdida'


  formularioPubli!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioPubli = this.fb.group({
      nombreObj: ['', Validators.required],
      descObj: ['', Validators.required],
      tipoObj: ['', Validators.required],
      tipoRep: ['', Validators.required],
      imagenObj: ['', Validators.required],
      fechaH: ['']
    });
  }

  crearPublicacion(){
    console.log(this.formularioPubli.value);
  }
}
