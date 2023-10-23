import React from 'react';

import N1 from '../../assets/svg/number1.svg?react';
import N2 from '../../assets/svg/number2.svg?react';
import N3 from '../../assets/svg/number3.svg?react';

import Football from '../../assets/svg/football.svg?react';
import Player from '../../assets/svg/player.svg?react';
import Podium from '../../assets/svg/podium.svg?react';

const Steps = () => {
  const divs = [
    <div key={1}>
      {<N1/>}
      {<Football/>}
    </div>,

    <div key={2} className='player'>
      {<N2/>}
      {<Player/>}
    </div>,

    <div key={3}>
      {<N3/>}
      {<Podium/>}
    </div>,
  ]
  
  const title = [
    <h2 className='first'>Monte o seu time com os craques da <strong>G12</strong></h2>,
    <h2>Acompanhe a performance dos seus atletas em campo.</h2>,
    <h2 className='last'>Some pontos e ganhe dinheiro com seus atletas.</h2>
  ]

  return (
    <section className='steps'>
      {divs.map((div, index) => (
        <article key={index}>
          {div}
          {title[index]}
        </article>
      ))}
    </section>
  );
}

export default Steps;
