// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Importa 'routes' después de su declaración


const appRoutes: Routes = [
  // Usa 'routes' importado de app.routes.ts
  ...routes,
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
