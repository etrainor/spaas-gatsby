import React from 'react';

import Card from '../card/card';

const Deck = props => (
  <section className="deck">
    <header>
      <h2>{props.content.title}</h2>
    </header>
    {props.content.records &&
      props.content.records.map((card, i) => <Card key={i} content={card} />)}
  </section>
);

export default Deck;
