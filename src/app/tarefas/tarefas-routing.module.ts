import { Routes } from '@angular/router';

import { ListarComponent } from './listar';
import { CadastroComponent } from './cadastro';
import { EditarComponent } from './editar';


export const TarefaRoutes: Routes = [
	
	{
		path: 'tarefas/listar', 
		component: ListarComponent 
	},
	{ 
		path: 'tarefas/cadastro', 
		component: CadastroComponent 
	}, 
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarComponent 
	} 
];