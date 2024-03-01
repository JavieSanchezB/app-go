import { Component, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}

@NgModule({
  declarations: [
    LoginComponent,
    // ... otros componentes
  ],
  imports: [
    // ... otros módulos
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
 
})
export class AppModule {}
