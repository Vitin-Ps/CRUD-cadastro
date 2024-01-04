import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CadFuncionarioComponent } from './components/pages/cad-funcionario/cad-funcionario.component';
import { CadVendaComponent } from './components/pages/cad-venda/cad-venda.component';
import { CadProdutoComponent } from './components/pages/cad-produto/cad-produto.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { FormularioDinamicoFilhoComponent } from './components/testes/formulario-dinamico-filho/formulario-dinamico-filho.component';
import { FormularioDinamicoPaiComponent } from './components/testes/formulario-dinamico-pai/formulario-dinamico-pai.component';
import { FormFuncComponent } from './components/forms/form-func/form-func.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';
import { FormProdutoComponent } from './components/forms/form-produto/form-produto.component';
import { CarrinhoProdutoComponent } from './components/pages/carrinho-produto/carrinho-produto.component';
import { FormVendaComponent } from './components/forms/form-venda/form-venda.component';
import { HomeAdminComponent } from './components/pages/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadFuncionarioComponent,
    CadVendaComponent,
    CadProdutoComponent,
    SobreComponent,
    FormularioDinamicoFilhoComponent,
    FormularioDinamicoPaiComponent,
    FormFuncComponent,
    MensagensComponent,
    FormProdutoComponent,
    CarrinhoProdutoComponent,
    FormVendaComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
