import { Component, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Moving-Motivators';
  cardDescription = '';
  editOrder = true;
  cards = [
    {
      name: 'Aceitação',
      image: 'assets/acceptance.png',
      alt: 'As pessoas ao meu redor aprovam o que eu faço e quem eu sou',
    },
    {
      name: 'Curiosidade',
      image: 'assets/curiosity.png',
      alt: 'Eu tenho muitas coisas para investigar e pensar',
    },
    {
      name: 'Liberdade',
      image: 'assets/freedom.png',
      alt: 'Eu sou independente dos outros com meu próprio trabalho e responsabilidades',
    },
    {
      name: 'Status',
      image: 'assets/status.png',
      alt: 'Minha posição é boa e reconhecida pelas outras pessoas com as quais eu trabalho',
    },
    {
      name: 'Meta',
      image: 'assets/goal.png',
      alt: 'Meu propósito na vida é refletido no trabalho que eu faço',
    },
    {
      name: 'Honra',
      image: 'assets/honor.png',
      alt: 'Eu sinto orgulho por meus valores pessoais serem refletidos em como eu trabalho',
    },
    {
      name: 'Maestria',
      image: 'assets/mastery.png',
      alt: 'Meu trabalho desafia minha competência, mas ainda está dentro das minhas habilidades',
    },
    {
      name: 'Ordem',
      image: 'assets/order.png',
      alt: 'Existem regras e políticas o suficiente para um ambiente estável',
    },
    {
      name: 'Poder',
      image: 'assets/power.png',
      alt: 'Há espaço o suficiente para que eu influencie o que está acontecendo em torno de mim',
    },
    {
      name: 'Relação',
      image: 'assets/relatedness.png',
      alt: 'Eu tenho bons contatos sociais com as pessoas dentro e em torno do meu trabalho',
    },
  ];

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  public copyOrder() {
    return this.cards.map(card => card.name).join('\t')
  }
}
