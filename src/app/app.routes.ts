// app.routes.ts
import { Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarVisitaComponent } from './registrar-visita/registrar-visita.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'registrar-visita', component: RegistrarVisitaComponent },
  // Agrega más rutas según sea necesario
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
];
