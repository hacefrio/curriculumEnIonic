import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componente:any[]=[
    {
      icon:'book-outline',
      name: 'ESTUDIOS',
      redirecTo:'/estudios'
    },
    {
      icon:'briefcase-outline',
      name: 'EXPERIENCIA LABORAL',
      redirecTo:'/experiencia'
    },
    {
      icon:'american-football-outline',
      name: 'HOBBIES',
      redirecTo:'/hobbies'
    },
    {
      icon:'construct-outline',
      name: 'HABILIDADES',
      redirecTo:'/habilidades'
    }
  ]
  constructor() {}

}
