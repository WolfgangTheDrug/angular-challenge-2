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
  title = 'angular-challenges';
  card: CardModel = {
    title: 'Binding in Angular',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    style: "20rem",
    image: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  }

  public grow(): void {
    this.card.style = "100%";
  }

  public shrink(): void {
    this.card.style = "20rem";
  }

  public loadData(): void {
    this.card.title = 'Master of binding in Angular'
    this.card.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    this.card.style = '20rem';
    this.card.image = 'https://repository-images.githubusercontent.com/24195339/d4194dc2-d880-43f7-960c-ea30e05c6531'
  }
}
export interface CardModel {
  title: string;
  description: string;
  style: string;
  image: string;
}

