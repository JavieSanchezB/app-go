// app.routes.ts
import { Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
//import { RegistrarVisitaComponent } from './registrar-visita/registrar-visita.component';

export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  //{ path: 'registrar-visita', component: RegistrarVisitaComponent },
  // Agrega más rutas según sea necesario
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
