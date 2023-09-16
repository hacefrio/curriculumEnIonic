import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadesPageRoutingModule } from './habilidades-routing.module';

import { HabilidadesPage } from './habilidades.page';
import { HeaderModule } from 'src/app/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadesPageRoutingModule,
    HeaderModule
  ],
  declarations: [HabilidadesPage]
})
export class HabilidadesPageModule {}
