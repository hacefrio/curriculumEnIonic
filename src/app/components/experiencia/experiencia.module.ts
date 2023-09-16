import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciaPageRoutingModule } from './experiencia-routing.module';

import { ExperienciaPage } from './experiencia.page';
import { HeaderModule } from 'src/app/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaPageRoutingModule,
    HeaderModule
  ],
  declarations: [ExperienciaPage]
})
export class ExperienciaPageModule {}
