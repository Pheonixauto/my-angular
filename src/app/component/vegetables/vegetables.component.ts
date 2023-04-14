import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/share/component/card/card.component';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent {

}
