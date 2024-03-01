// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticación (puedes implementar tu propia lógica aquí)
    // Por ahora, simplemente establecemos isLoggedIn en true si el usuario y la contraseña son "admin"
    this.isLoggedIn = username === 'admin' && password === 'admin';
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
