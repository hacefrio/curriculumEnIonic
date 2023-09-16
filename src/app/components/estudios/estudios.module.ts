import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiosPageRoutingModule } from './estudios-routing.module';

import { EstudiosPage } from './estudios.page';
import { HeaderModule } from 'src/app/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiosPageRoutingModule,
    HeaderModule
  ],
  declarations: [EstudiosPage]
})
export class EstudiosPageModule {}
