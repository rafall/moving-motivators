import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, moveItemInArray } from '@angular/cdk/drag-drop';
import { MovingMotivator } from './movingmotivators.model';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Moving Motivators';
  cardDescription = '';
  editOrder = true;

  priorityMax = 120;
  priorityCopyLevels = 5;
  priorityLevelSize = (this.priorityMax * 2) / this.priorityCopyLevels;

  cards: MovingMotivator[] = [
    {
      name: 'Aceitação',
      image: 'assets/acceptance.png',
      alt: 'As pessoas ao meu redor aprovam o que eu faço e quem eu sou',
      priority: 0,
    },
    {
      name: 'Curiosidade',
      image: 'assets/curiosity.png',
      alt: 'Eu tenho muitas coisas para investigar e pensar',
      priority: 0,
    },
    {
      name: 'Liberdade',
      image: 'assets/freedom.png',
      alt: 'Eu sou independente dos outros com meu próprio trabalho e responsabilidades',
      priority: 0,
    },
    {
      name: 'Status',
      image: 'assets/status.png',
      alt: 'Minha posição é boa e reconhecida pelas outras pessoas com as quais eu trabalho',
      priority: 0,
    },
    {
      name: 'Meta',
      image: 'assets/goal.png',
      alt: 'Meu propósito na vida é refletido no trabalho que eu faço',
      priority: 0,
    },
    {
      name: 'Honra',
      image: 'assets/honor.png',
      alt: 'Eu sinto orgulho por meus valores pessoais serem refletidos em como eu trabalho',
      priority: 0,
    },
    {
      name: 'Maestria',
      image: 'assets/mastery.png',
      alt: 'Meu trabalho desafia minha competência, mas ainda está dentro das minhas habilidades',
      priority: 0,
    },
    {
      name: 'Ordem',
      image: 'assets/order.png',
      alt: 'Existem regras e políticas o suficiente para um ambiente estável',
      priority: 0,
    },
    {
      name: 'Poder',
      image: 'assets/power.png',
      alt: 'Há espaço o suficiente para que eu influencie o que está acontecendo em torno de mim',
      priority: 0,
    },
    {
      name: 'Relação',
      image: 'assets/relatedness.png',
      alt: 'Eu tenho bons contatos sociais com as pessoas dentro e em torno do meu trabalho',
      priority: 0,
    },
  ];

  constructor(
    private clipboard: Clipboard,
  ) { }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  public copyToClipboard(): void {
    const copyMatrix = Array(this.priorityCopyLevels);
    for (let i = 0; i < this.priorityCopyLevels; i++) { copyMatrix[i] = Array(this.cards.length); }

    this.cards.forEach((card, columnIndex) => {
      let lineIndex = Math.floor((card.priority + this.priorityMax) / this.priorityLevelSize);
      if (lineIndex === copyMatrix.length) { lineIndex--; }

      copyMatrix[lineIndex][columnIndex] = card.name;
    });

    const joinedLines = copyMatrix.map(line => line.join('\t'));
    const copyData = joinedLines.join('\n');
    this.clipboard.copy(copyData);
  }

  public startPriority(): void {
    this.editOrder = false;
    this.cards.forEach(card => card.priority = 0);
  }

  public changePriority(event: CdkDragEnd<string[]>): void {
    const cardId = Number(event.source.element.nativeElement.id.replace('vertical', ''));
    const card = this.cards[cardId];

    card.priority += (event.distance.y as number);

    if (Math.abs(card.priority) > this.priorityMax) {
      card.priority = this.priorityMax * (Math.abs(card.priority) / card.priority);
    }
  }
}
