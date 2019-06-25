import React from 'react';
import Card from './Card';

class ListaCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 0, titulo: 'Minions Ipsum 1', texto: 'Minions ipsum tulaliloo baboiii butt. Tulaliloo potatoooo tulaliloo pepete gelatooo. Underweaaar po kass bananaaaa bee do bee do bee do jeje jiji baboiii. Jeje bananaaaa chasy uuuhhh aaaaaah pepete chasy bananaaaa. Bappleees jeje poopayee me want bananaaa!', urlImg: 'http://www.calberhs.com/minionsipsum/img/minion.png' },
        { id: 1, titulo: 'Minions Ipsum 2', texto: 'Aaaaaah tatata bala tu pepete tatata bala tu. Belloo! underweaaar la bodaaa hana dul sae pepete. Jeje bananaaaa ti aamoo! Hahaha chasy belloo! Gelatooo bee do bee do bee do. Chasy aaaaaah uuuhhh para tú uuuhhh bananaaaa.', urlImg: 'http://www.calberhs.com/minionsipsum/img/minion.png' }
      ]
    }
  }

  render() {
    const listaCards = this.state.cards.map(card => <Card key={card.id} {...card} />)
    return (
      <div>
        {/* <Card {...this.state.cards[0]} />
        <Card {...this.state.cards[1]} /> */}
        {listaCards}
      </div>
    )
  }
}

export default ListaCards;