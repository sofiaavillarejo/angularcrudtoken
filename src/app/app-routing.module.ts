import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path: "", component: LogincomponentComponent},
  {path: "perfil", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
