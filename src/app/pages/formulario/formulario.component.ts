import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formularioLista: FormGroup;
  public datosLista:any;
  constructor(){ 
    this.datosLista = [];
    this.formularioLista = new FormGroup({
      'categoria': new FormControl('',[
        Validators.required,
        Validators.maxLength(25)
      ]),

      'producto': new FormControl('',[
        Validators.required,
        Validators.maxLength(50)
      ]),

      'cantidad': new FormControl('',[
        Validators.required,
      ])
    });
  }

  ngOnInit(): void {

  }

  recibeDatos(){
    let datos = this.formularioLista.value;
    this.datosLista.push(datos);
    console.log(this.datosLista);
  }

}
