import { RouterOutlet } from '@angular/router';
import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatCardModule, MatRadioModule, FormsModule, MatProgressSpinnerModule,MatSliderModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'app-go';
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  onSelectionChange(event: MatSelectChange): void {
    const selectedValue = event.value;

    // Obtén el elemento de input y textarea
    const inputElement = document.querySelector('#myInput') as HTMLInputElement;
    const textareaElement = document.querySelector('#myTextarea') as HTMLTextAreaElement | null;

    // Cambia el texto del input y textarea según la opción seleccionada
    switch (selectedValue) {
      case 'azul':
        inputElement.value = 'Texto para azul';
        inputElement.style.color = 'blue';
        inputElement.style.backgroundColor  = '';
        if (textareaElement) {
          textareaElement.style.color = 'blue';
          textareaElement.value = 'Texto para azul en textarea';
        }
        break;
      case 'verde':
        inputElement.value = 'Texto para verde';
        inputElement.style.color = 'green';
        inputElement.style.backgroundColor  = 'red';
        if (textareaElement) {
          textareaElement.style.color = 'green';
          textareaElement.value = 'Texto para verde en textarea';
        }
        break;
      // Agrega más casos según sea necesario
      default:
        inputElement.value = '';
        inputElement.style.color = '';
        if (textareaElement) {
          textareaElement.value = '';
          textareaElement.style.color = '';
        }
        break;
    }
    this.updateProgressBarColor();
  }
  updateProgressBarColor(): void {
    // Obtén el elemento de la barra de progreso
    const progressBar = document.querySelector('.mat-progress-spinner-svg-circle') as SVGCircleElement;
  
    // Obten la variable 'color' actual
    const currentColor = this.color;
  
    // Realiza la lógica de cambio de color basada en el valor de 'color'
    switch (currentColor) {
      case 'primary':
        progressBar.style.stroke = 'blue';
        break;
      case 'accent':
        progressBar.style.stroke = 'green';
        break;
      case 'warn':
        progressBar.style.stroke = 'red';
        break;
      default:
        // Puedes establecer un color predeterminado o no hacer nada si el color no coincide con los casos anteriores
        break;
    }
  
  }

}
