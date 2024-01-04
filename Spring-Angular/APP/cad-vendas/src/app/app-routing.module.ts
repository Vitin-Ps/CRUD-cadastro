import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CadFuncionarioComponent } from './components/pages/cad-funcionario/cad-funcionario.component';
import { CadProdutoComponent } from './components/pages/cad-produto/cad-produto.component';
import { CadVendaComponent } from './components/pages/cad-venda/cad-venda.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { CarrinhoProdutoComponent } from './components/pages/carrinho-produto/carrinho-produto.component';
import { HomeAdminComponent } from './components/pages/home-admin/home-admin.component';


const routes: Routes = [
  // {path:"", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"funcionarios", component:CadFuncionarioComponent},
  {path:"produtos", component:CadProdutoComponent},
  {path:"vendas", component:CadVendaComponent},
  {path:"vendas/:id", component:CadVendaComponent},
  {path:"sobre", component:SobreComponent},
  {path:"carrinho-produtos/:id", component:CarrinhoProdutoComponent},
  {path:"home/area-admnistrativa", component:HomeAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
