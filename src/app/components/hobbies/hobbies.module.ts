import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HobbiesPageRoutingModule } from './hobbies-routing.module';

import { HobbiesPage } from './hobbies.page';
import { HeaderModule } from 'src/app/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HobbiesPageRoutingModule,
    HeaderModule
  ],
  declarations: [HobbiesPage]
})
export class HobbiesPageModule {}
