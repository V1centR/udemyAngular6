import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './model';
import { ListarComponent } from './listar';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CadastroComponent } from './cadastro';
import { EditarComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ListarComponent, CadastroComponent, EditarComponent],
  providers:[
  		TarefaService
  ]

})
export class TarefasModule {}