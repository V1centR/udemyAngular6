import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './model';
import { ListarComponent } from './listar';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CadastroComponent } from './cadastro';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ListarComponent, CadastroComponent],
  providers:[
  		TarefaService
  ]

})
export class TarefasModule {}