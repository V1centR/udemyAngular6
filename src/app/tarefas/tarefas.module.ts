import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './model';
import { ListarComponent } from './listar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarComponent],
  providers:[
  		TarefaService
  ]

})
export class TarefasModule {}