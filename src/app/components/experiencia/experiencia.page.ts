import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {

  componente: any[] = [
    {
      name: 'PRACTICA PROFESIONAL ADMINISTRACION DE EMPRESAS(CONTRALORIA)',
      subtitle: '2018-2018',
      content: 'Realize mi practica profesional de administracion de empresas donde realize trabajos en el area de contraloria en gimnasios pacific.'
    },
    {
      name: 'PRACTICA PROFESIONAL ANALISTA PROGRAMADOR',
      subtitle: '2020-2020',
      content: 'Realize mi practica profesional en una startup de unos amigos, donde desarrollamos una aplicacion que ayudaba al control de acceso de edificios.'
    },
    {
      name: 'PEONETA',
      subtitle: '2020-2020',
      content: 'Trabaje durante un par de meses de peoneta.'
    },
    {
      name: 'REPONEDOR NOCTURNO',
      subtitle: '2020-2020',
      content: 'Trabaje durante un par de meses de reponedor nocturno en un supermecado.'
    },
    {
      name: 'SOPORTE INFORMATICO',
      subtitle: '2021-2021',
      content: 'trabaje durante 6 meses de soporte informatico, en el colegio alcantara de la cordillera, estaba encargado de la mantencion de los computadores, y de la instalacion de programas, gestion de los recursos tecnologicos del colegio.'
    },
    {
      name: 'REPARTIDOR UBER EATS BICICLETA',
      subtitle: '2021-2021',
      content: 'Trabaje durante unos meses de repartidor en la aplicacion uber, al mismo tiempo vendia corta vientos y ropa de ciclismo.'
    },
    {
      name: 'PROGRAMADOR FULLSTACK',
      subtitle: '2021-ACTUALIDAD',
      content: 'Actualmente me encuentro trabajando de programador full stack, donde programo servlets bajo el stack de JAVA, WILDFLY y SQLSERVER. Tambien en otros lenguajes dependiendo de los requerimientos de los proyectos(Visual Basic, batch code, php, javascript), en donde he estado como jefe de algunos proyectos pequeños. Actulamente estamos implementando un sistema de bodega para todo TVN, empezando con los distintos pañoles que hay dentro del canal.'
    },
    {
      name: 'TALLER DE IMPRESION 3D',
      subtitle: '2022-ACTUALIDAD',
      content: 'Actualmente tengo un una pyme que consiste en un taller de impresion 3d, en el cual tambien he desarrollado aptitudes y capacidades enfocadas a todo lo que se refiere con la gestion de una pyme, tambien conocimientos sobre el mundo de las impresiones 3d, modelado, diseño y todo lo que implica imprimir en 3d.'
    },
    {
      name: 'TRABAJOS EXPORADICOS',
      subtitle: '2018-ACTUALIDAD',
      content: 'En todo este tiempo tambien tomo trabajos exporadicos (BICIMENSAJERIA O AYUDANTE DE MAESTRO).'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
