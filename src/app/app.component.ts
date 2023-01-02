import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Pablo';
  nombre2:string = 'PaBlO';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  activar: boolean = true;



  videoUrl: string = 'https://www.youtube.com/embed/WyQOrMnmEjQ';


  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    },4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }







}
