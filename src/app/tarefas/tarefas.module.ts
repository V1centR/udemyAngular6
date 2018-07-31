import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './model';
import { ListarComponent } from './listar';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ListarComponent],
  providers:[
  		TarefaService
  ]

})
export class TarefasModule {}