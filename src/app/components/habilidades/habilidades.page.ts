import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {

  componente: any[] = [
    {
      name: 'JAVA',
      subtitle: '2019-ACTUALIDAD',
      content: 'Actualmente trabajo con JAVA, en el cual he desarrollado aplicaciones web, aplicaciones de escritorio, aplicaciones moviles, y aplicaciones para servidores.'
    },
    {
      name: 'PHP',
      subtitle: '2021-ACTUALIDAD',
      content: 'Actualmente trabajo con PHP, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'JAVASCRIPT',
      subtitle: '2021-ACTUALIDAD',
      content: 'Actualmente trabajo con JAVASCRIPT, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'SQLSERVER',
      subtitle: '2017-ACTUALIDAD',
      content: 'Actualmente trabajo con SQLSERVER, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'MYSQL',
      subtitle: '2017-ACTUALIDAD',
      content: 'Actualmente trabajo con MYSQL, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'HTML',
      subtitle: '2017-ACTUALIDAD',
      content: 'Actualmente trabajo con HTML, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'CSS',
      subtitle: '2017-ACTUALIDAD',
      content: 'Actualmente trabajo con CSS, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'BOOTSTRAP',
      subtitle: '2017-ACTUALIDAD',
      content: 'Actualmente trabajo con BOOTSTRAP, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'IONIC',
      subtitle: '2023-ACTUALIDAD',
      content: 'Actualmente trabajo con IONIC, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'ANGULAR',
      subtitle: '2023-ACTUALIDAD',
      content: 'Actualmente trabajo con ANGULAR, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    },
    {
      name: 'REACT',
      subtitle: '2023-ACTUALIDAD',
      content: 'Actualmente trabajo con REACT, en el cual he desarrollado aplicaciones web, y aplicaciones para servidores.'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
