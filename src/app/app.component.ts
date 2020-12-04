import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moving-Motivators';
  cardDescription = '';
  editOrder = true;
  cards = [
    {
      name: 'Aceitação',
      image: 'assets/acceptance.png',
      alt: 'The people around me approve of what I do and who I am.',
    },
    {
      name: 'Curiosidade',
      image: 'assets/curiosity.png',
      alt: 'I have plenty of things to investigate and to think about',
    },
    {
      name: 'Liberdade',
      image: 'assets/freedom.png',
      alt: 'I am independent of others with my work and my responsibilities.',
    },
    {
      name: 'Status',
      image: 'assets/status.png',
      alt: 'My position is good, and recognized by the people who work with me.',
    },
    {
      name: 'Meta',
      image: 'assets/goal.png',
      alt: 'My purpose in life is reflected in the work that I do.',
    },
    {
      name: 'Honra',
      image: 'assets/honor.png',
      alt: 'I feel proud that my personal values are reflected in how I work.',
    },
    {
      name: 'Maestria',
      image: 'assets/mastery.png',
      alt: 'My work challenges my competence but it is still within my abilities.',
    },
    {
      name: 'Ordem',
      image: 'assets/order.png',
      alt: 'There are enough rules and policies for a stable environment.',
    },
    {
      name: 'Poder',
      image: 'assets/power.png',
      alt: 'There’s enough room for me to influence what happens around me.',
    },
    {
      name: 'Relação',
      image: 'assets/relatedness.png',
      alt: 'I have good social contacts with the people in my work.',
    },
  ];

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  public showDescription(description: string) {
    this.cardDescription = description;
  }
}
