import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'angular-challenges';
  students: StudentModel[] = [
    {
      id: 's-1',
      name: 'John',
      surname: 'Doe',
      grades: [5, 4, 1],
    },
    {
      id: 's-2',
      name: 'Frank',
      surname: 'Sinatra',
      grades: [5, 5, 5],
    },
    {
      id: 's-3',
      name: 'Rod',
      surname: 'Stewart',
      grades: [3, 2, 5],
    },
  ];

}

export interface StudentModel {
  id: string;
  name: string;
  surname: string;
  grades: number[];
}

